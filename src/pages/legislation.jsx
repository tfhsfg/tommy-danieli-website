import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Legislation.css";

// מערך השאלות והתשובות מותאם למצע המועצה
const faqs = [
  {
    q: "מדוע חוזרי מנכ\"ל וחוק זכויות התלמיד לא מספיקים כיום?",
    a: "חוזרי מנכ\"ל ניתנים לשינוי בקלות על ידי דרגים פוליטיים ומשתנים ומותירים את המועצה תלויה ברצונם הטוב של מבוגרים. חוק זכויות התלמיד כולל סעיפים כלליים בלבד, בעוד שחיקוק חוק ייעודי יעניק למועצה מעמד משפטי יציב, עצמאי וחסין מפני לחצים."
  },
  {
    q: "כיצד החוק ישפיע על נציג במועצה בית-ספרית או רשותית?",
    a: "החוק יעניק הכרה סטטוטורית לכל גלגלי הנציגות. משמעות הדבר היא הגנה משפטית, הגדרת סמכויות ברורה וכוח אמיתי להשפיע מול הנהלות בתי הספר והרשויות המקומיות, ולא רק ברמה הארצית."
  },
  {
    q: "מה המשמעות של עצמאות מוחלטת לתקנון העל?",
    a: "החוק יקבע שניהול הבחירות, האתיקה והתקנון הפנימי של המועצות נקבעים אך ורק על ידי בני הנוער עצמם. כל תהליך פתיחת ועדכון התקנון שנוביל השנה יהפוך להיסטורי, מכיוון שהחוקים שננסח יחד עם השטח יחייבו את כולם לשנים קדימה ללא התערבות חיצונית."
  },
  {
    q: "איך נבטיח שהחוק אכן ייושם ולא יישאר רק על הנייר?",
    a: "המהלך המשפטי בכנסת יתבצע במקביל לחיזוק השטח (המחוזות, הרשויות ובתי הספר). הכוח האמיתי מגיע מהאמון והלגיטימציה של בני הנוער; ככל שהשטח יהיה חזק ומודע לזכויותיו, כך נוכל לאכוף את החוק ולעמוד כאיש אחד מול מקבלי ההחלטות."
  }
];

// 3 נקודות המצב / האתגרים הנוכחיים
const infoCards = [
  { id: 1, icon: "fa-solid fa-scale-unbalanced", text: "מעמד משפטי חלש הנשען על חוזרי מנכ\"ל משתנים" },
  { id: 2, icon: "fa-solid fa-shield-halved", text: "כוח הנציגות פגיע ותלוי ברצונם הטוב של מבוגרים" },
  { id: 3, icon: "fa-solid fa-hand-holding-dollar", text: "פעילות המועצות מותנית בתקציבים מזדמנים" }
];

// 4 עמודי התווך של החוק שייכתב
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

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`eduFaqItem${open ? " eduFaqItemOpen" : ""}`}>
      <button
        type="button"
        className="eduFaqSummary"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{q}</span>
        <span className="eduFaqMarker">{open ? "–" : "+"}</span>
      </button>
      <div className="eduFaqAnswerWrap">
        <div className="eduFaqAnswerInner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Regulations() {
  return (
    <section className="lawPageContainer almoni">

      {/* 1. באנר עליון */}
      <Banner
        image="/images/Artboard-1.png"
        title="חיקוק המועצה הארצית"
        description={"עושים סוף לתלות ומקבעים מעמד עצמאי -\nמעגנים את כוחן של המועצות בספר החוקים של מדינת ישראל!"}
      />

      {/* 2. כרטיסי המידע והסטטיסטיקה */}
      <div id="stats-section" className="eduSection lawStatsSection">
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

      {/* 3. תוכנית החוק */}
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
        </div>
      </div>

      {/* 4. קריאה לפעולה + כפתור קישור מעודכן */}
      <div className="eduSection lawCallToAction" style={{ marginBottom: "120px" }}>
        <h2 className="ctaMain">
          ננצל את הליווי המקצועי של עורך הדין של הוועדה לניסוח הצעת חוק מוגמרת,
          נרתום חברי כנסת, נקיים שדולות ונפעיל לחץ ציבורי ותקשורתי נרחב!
        </h2>
        <h3 style={{ maxWidth: "850px", margin: "0 auto 30px", fontSize: "16px", lineHeight: "1.6", color: "var(--text)" }}>
          חוק לבדו, חזק ככל שיהיה, לא שווה כלום אם הוא נשאר רק על הנייר. מהלך החיקוק בכנסת לא יקרה בוואקום – הוא יתבצע במקביל ובסנכרון מלא עם חיזוק הגלגלים בשטח. 
          הכוח האמיתי של הוועדה האתית-משפטית מגיע מהלגיטימציה והאמון שלכם. אנחנו נחוקק את המועצה, אך במקביל נחזק את המחוזות, הרשויות ובתי הספר כדי לוואק שברגע האמת כולנו עומדים כאיש אחד.
        </h3>
        <div className="ctaButtons">
          <a 
            href="https://drive.google.com/file/d/1zhVWRE0MYh_mwhkumrlrRp8SjGUtgS1y/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ctaPrimaryBtn"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            קרא את טיוטת החוק
          </a>
        </div>
      </div>

      {/* 5. אזור שאלות ותשובות */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">שאלות ותשובות</h2>
        <div className="eduFaq">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
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
