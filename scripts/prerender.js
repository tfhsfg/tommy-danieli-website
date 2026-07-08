// סקריפט build-time בלבד (Node): מרנדר כל נתיב לעמוד HTML סטטי עם ה-title/description/OG
// הנכונים לו, כדי שגם Google וגם בוטים שלא מריצים JS (וואטסאפ, פייסבוק, לינקדאין) יראו
// תצוגה מקדימה נכונה לכל עמוד. בסוף מייצר גם sitemap.xml ומנקה את חבילת ה-SSR הזמנית.

import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL } from "../src/seo/site.js";

const rootDir = path.dirname(fileURLToPath(import.meta.url)) + "/..";
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, "dist-ssr");

async function main() {
  const template = await readFile(path.join(distDir, "index.html"), "utf-8");
  const { render, routes } = await import(
    path.join(ssrDir, "entry-server.js")
  );

  for (const route of routes) {
    await writePage(template, render, route.path);
  }

  // עמוד 404 סטטי: כל נתיב שלא קיים ברשימת הראוטים מפיל אל ה-catch-all
  // (NotFound) עם robots=noindex, כדי ש-Vercel יגיש אותו בסטטוס 404 אמיתי.
  const notFound = render("/__not_found__");
  await writeFile(
    path.join(distDir, "404.html"),
    buildHtml(template, notFound)
  );

  await writeSitemap(routes);
  await rm(ssrDir, { recursive: true, force: true });

  console.log(`Prerendered ${routes.length} routes + 404.html + sitemap.xml`);
}

async function writePage(template, render, routePath) {
  const result = render(routePath);
  const html = buildHtml(template, result);
  const outDir =
    routePath === "/" ? distDir : path.join(distDir, routePath.slice(1));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
}

function buildHtml(template, { head, body }) {
  return template
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", body);
}

async function writeSitemap(routes) {
  const urls = routes
    .filter((route) => !route.noindex)
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path === "/" ? "/" : route.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${(route.priority ?? 0.5).toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  await writeFile(path.join(distDir, "sitemap.xml"), xml);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
