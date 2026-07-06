import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// 1. הגדרת הכרטיסיות עם הטקסטים המעודכנים ואייקונים מותאמים
const cards = [
  {
    title: "מיישרים קו בחינוך",
    text: "בונים תוכנית לאומית בחירום, קידום שיעורי אוריינות מדיה ושיח אזרחי, ושינוי אירועי ההערכה משינון לחשיבה.",
    icon: "education",
    to: "/education"
  },
  {
    title: "מיישרים קו בוועדה",
    text: "הופכים את הוועדה למקום עבודה ממוקד ובעל מנהיגות משותפת. מייצרים תרבות של אמון ומקנים מיומנויות מעשיות למאה ה21",
    icon: "committee",
    to: "/committee"
  },
  {
    title: "מיישרים קו במורחבת",
    text: "ניצר תהליכי עומק של הכשרה מקצועית, מיפוי צרכים, והטמעה רחבה של השפה הארגונית והתקינות המועצתית.",
    icon: "professional",
    to: "/regional"
  },
  {
    title: "מיישרים קו בתקנון העל",
    text: "מובילים מהלך היסטורי לפתיחת תקנון העל. מתאימים את התקנון לשטח בשותפות מלאה ומנגישים אותו לכלל הגלגלים.",
    icon: "regulation",
    to: "/regulations"
  },
];

// 2. קומפוננטת אייקונים חכמה שמחזירה SVG מתאים לפי סוג הכרטיסייה
function CardIcon({ type }) {
  const baseProps = {
    viewBox: "0 0 120 120",
    className: "scaleIcon",
    "aria-hidden": "true",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  switch (type) {
    case "education": // אייקון כובע סטודנט / אקדמיה לחינוך
      return (
        <svg {...baseProps}>
          <path d="M60 20L15 45l45 25 45-25z" />
          <path d="M30 53.5V85c0 10 15 15 30 15s30-5 30-15V53.5" />
          <path d="M95 45v35" />
        </svg>
      );
    case "committee": // אייקון של קבוצה / שותפות ומנהיגות
      return (
        <svg {...baseProps}>
          <circle cx="60" cy="35" r="15" />
          <path d="M25 95c0-20 15-25 35-25s35 5 35 25" />
          <circle cx="25" cy="50" r="10" />
          <path d="M10 85c0-10 5-15 15-15" />
          <circle cx="95" cy="50" r="10" />
          <path d="M110 85c0-10-5-15-15-15" />
        </svg>
      );
    case "professional": // אייקון גרף צמיחה / הכשרה מקצועית
      return (
        <svg {...baseProps}>
          <path d="M20 100h80" />
          <path d="M20 100V20" />
          <path d="M20 80l25-25 25 15 35-45" />
          <path d="M105 25H85M105 25v20" />
        </svg>
      );
    case "regulation": // אייקון ספר פתוח / תקנון
      return (
        <svg {...baseProps}>
          <path d="M60 95V25" />
          <path d="M60 25c-5-10-25-10-45-10v70c20 0 40 0 45 10" />
          <path d="M60 25c5-10 25-10 45-10v70c-20 0-40 0-45 10" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={`https://raw.githubusercontent.com/tfhsfg/tommy-danieli-website/refs/heads/main/public/images/hero-banner.png`} draggable={false} alt="תומי דניאלי - מיישרים קו" />
      </section>

      <section className="almoni">
        <h1 className="almoni brand-blue">
          <strong>הגיע הזמן ליישר קו.</strong>
        </h1>

        <p className="subtitle brand-blue" style={{ visibility: "hidden" }}>
          ימנית, ציונית וליברלית
        </p>

        <div className="cardsGrid">
          {cards.map((card) => (
            <Link className="card" to={card.to} key={card.title}>
              <CardIcon type={card.icon} />
              <div className="cardText">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="readMoreContainer">
          <a href="/tommy-danieli-website/#/plans" className="readMoreButton almoni">
            לקריאה עוד
          </a>
        </div>
      </section>
      {/* אזור הוידאו המעודכן עם נגן יוטיוב המוטמע כהלכה */}
      <section className="videoPlaceholder">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QW0lPSt4LuI"
          title="סרטון מיישרים קו - תומי דניאלי"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}