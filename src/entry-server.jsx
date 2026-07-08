import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { routes } from "./seo/routes";

// עוטפים ב-<html><head></head><body> ריקים כדי לתת ל-React 19 יעד אמיתי
// "לרחף" (hoist) אליו את ה-title/meta/link שנוצרים עמוק בתוך העמוד (ראו Seo.jsx),
// ואז שולפים את שני החלקים לפי הסמנים הקבועים <head>/<body> (ראו scripts/prerender.js).
export function render(url) {
  const full = renderToString(
    <html>
      <head></head>
      <body>
        <StrictMode>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </StrictMode>
      </body>
    </html>
  );

  return {
    head: between(full, "<head>", "</head>"),
    body: between(full, "<body>", "</body>"),
  };
}

function between(source, startTag, endTag) {
  const start = source.indexOf(startTag) + startTag.length;
  const end = source.indexOf(endTag, start);
  return source.slice(start, end);
}

// נשלף בזמן ה-build כדי לדעת אילו נתיבים לרנדר מראש ואת מפת האתר
export { routes };
