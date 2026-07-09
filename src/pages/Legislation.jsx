import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Legislation.css";

// 3 נקודות המצב / האתגרים הנוכחיים (נשאר בדיוק כמו שהיה)
const infoCards = [
  { id: 1, icon: "fa-solid fa-scale-unbalanced", text: "מעמד משפטי חלש הנשען על חוזרי מנכ\"ל משתנים" },
  { id: 2, icon: "fa-solid fa-shield-halved", text: "כוח הנציגות פגיע ותלוי ברצונם הטוב של מבוגרים" },
  { id: 3, icon: "fa-solid fa-hand-holding-dollar", text: "פעילות המועצות מותנית בתקציבים מזדמנים" }
];

// 4 עמודי התווך של החוק שייכתב (נשאר בדיוק כמו שהיה)
const lawSteps = [
  {
    id: "01",
    title: "הכרה בכל גלגלי הנציגות",
    bullets: [
      "הכרה רשמית וסטטוטורית במעמד המועצות בכל גלגליהן – <strong>הארצי, המחוזי, הרשותי והבית-ספרי</strong>.",
      "הבטחת הגנה משפטית וכוח ביצועי אמיתי לכל נציג ונציגה בכל רמה ובכל מקום בארץ."
    ]
  },
  {
    id: "02",
    title: "חובת היוועצות מוחלטת",
    bullets: [
      "עיגון חוקי שיחייב את ועדת החינוך של הכנסת, משרד החינוך ומשרדי הממשלה השונים לקבל את עמדת המועצה.",
      "חובת זימון נציגים רשמיים לכל דיון בהצעת חוק, תקנה או רפורמה הנוגעת לחייהם של בני הנוער."
    ]
  },
  {
    id: "03",
    title: "עצמאות לתקנון העל",
    bullets: [
      "קביעה חד-משמעית כי הניהול הפנימי, האתיקה והבחירות נתונים <strong>לבחירתו הבלעדית של הארגון</strong> ללא התערבות חיצונית.",
      "החוקים שננסח השנה יחד עם השטח בעידכון התקנון יהיו החוקים שיחייבו את כולם קדימה."
    ]
  },
  {
    id: "04",
    title: "תקצוב עצמאי ומעוגן",
    bullets: [
      "הבטחת תקציב קבוע, שקוף ומעוגן בחוק לפעילות המועצות בכל הגלגלים.",
      "מניעת מצבים בהם פעילות הנציגויות מותנית בלחצים פוליטיים או בתקציבים מזדמנים."
    ]
  }
];

export default function Legislation() {
  return (
    <section className="lawPageContainer almoni">

      {/* 1. באנר עליון */}
      <Banner
        image="/images/Artboard-1.png"
        title="חיקוק המועצה הארצית"
        description={"עושים סוף לתלות ומקבעים מעמד עצמאי -\nמעגנים את כוחן של המועצות בספר החוקים של מדינת ישראל!"}
      />

      {/* 2. פתיח העמוד: יישום מצע לנוער דרך חקיקה בכנסת */}
      <div className="eduSection lawPlatformSection" style={{ padding: "10px 0 20px" }}>
        <h2 className="eduSectionTitle brand-blue" style={{ textAlign: "center", marginBottom: "20px" }}>
          יישום ״מצע לנוער״
        </h2>
        <p style={{ maxWidth: "850px", margin: "0 auto", textAlign: "justify", fontSize: "18px", lineHeight: "1.6" }}>
        בשנה הקרובה נדאג לקדם ולדחוף את עקרונות ״מצע לנוער״ שהתחלנו להחתים עליו פוליטיקאים בקדנציה האחרונה. נהיה חלק בלתי נפרד ממהלכי חקיקה, כתיבת ניירות עמדה והשתתפות בפגישות עם נבחרי ציבור ובוועדות הכנסת, על מנת לוודא שהאינטרסים והזכויות של מיליון בני נוער מעוגנים בחוקיה הראשיים של המדינה        </p>
      </div>

      {/* 3. כרטיסי המידע והסטטיסטיקה (המלל המקורי שלך) */}
      <div id="stats-section" className="eduSection lawStatsSection" style={{ paddingTop: "20px" }}>
        <h2 className="eduSectionTitle brand-blue">
          מועצת התלמידים והנוער הארצית היא הריבון המייצג של מיליון בני נוער,<br />
          אך מעמדה המשפטי פגיע <span className="dangerText">ולא מעוגן בחוק!</span>
        </h2>
        <p>
          המצב הנוכחי משאיר את כוחה של הנציגות פגיע ותלוי ברצונם הטוב של מבוגרים ומקבל החלטות. 
          הגיע הזמן להפסיק להסתמך על הבטחות, ולהתחיל לקבוע עובדות בשטח. כיו"ר הוועדה האתית-משפטית, 
          אפעל ברעל ובמלוא העוצמה כדי לקדם ולדחוף לחיקוק "חוק מועצות התלמידים והנוער" בספר החוקים של מדינת ישראל.
        </p>
        <div className="lawStatsGrid">
          {infoCards.map((card) => (
            <div className="lawStatCard" key={card.id}>
              <div className="lawStatIconWrap">
                <i className={card.icon}></i>
              </div>
              <p className="lawStatText">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. תוכנית החוק (המלל המקורי שלך) */}
      <div className="eduSection lawPlanSection">
        <h2 className="eduSectionTitle brand-blue">מה יכלול החוק שננסח?</h2>
        <div className="lawPlanGrid"> 
          {lawSteps.map((step) => (
            <div className="lawPlanCard" key={step.id}>
              <span className="lawPlanNumber">{step.id}</span>
              <h3 className="lawPlanCardTitle">{step.title}</h3>
              <ul className="lawPlanBullets">
                {step.bullets.map((bullet, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
                ))}
              </ul>
            </div>
          ))}
        </div><br></br><br></br>
        <h3 style={{ maxWidth: "850px", margin: "0 auto 30px", fontSize: "16px", lineHeight: "1.6", color: "var(--text)" }}>
          חוק לבדו, חזק ככל שיהיה, לא שווה כלום אם הוא נשאר רק על הנייר. מהלך החיקוק בכנסת לא יקרה בוואקום – הוא יתבצע במקביל ובסנכרון מלא עם חיזוק הגלגלים בשטח. 
          הכוח האמיתי של הוועדה האתית-משפטית מגיע מהלגיטימציה והאמון שלכם. אנחנו נחוקק את המועצה, אך במקביל נחזק את המחוזות, הרשויות ובתי הספר כדי לוודא שברגע האמת כולנו עומדים כאיש אחד.
        </h3>
        <div className="ctaButtons">
          <a 
            href="/documents/הצעת חוק מועצות התלמידים והנוער (מעמד סטטוטורי, עצמאות ותקצוב), התשפ״ו-2026.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ctaPrimaryBtn"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            קרא את טיוטת החוק
          </a>
        </div>
      </div>


      {/* 6. כפתור מעבר לכל התוכניות */}
      <div className="readMoreContainer">
        <Link to="/plans" className="readMoreButton">
          לכל התוכניות
        </Link>
      </div>

    </section>
  );
}
