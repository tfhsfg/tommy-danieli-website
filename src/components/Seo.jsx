import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_IMAGE } from "../seo/site";

// כל תגית כאן (title/meta/link/script) מנוהלת נטיבית ב-React 19: הן "מרחפות"
// (hoisted) אוטומטית ל-<head> האמיתי, גם בטעינה ראשונית וגם במעבר בין עמודים
// בצד הלקוח, וגם ב-renderToString בזמן ה-build (ראו scripts/prerender.js).
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
}) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – מיישרים קו`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {!noindex && <link rel="canonical" href={url} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}
