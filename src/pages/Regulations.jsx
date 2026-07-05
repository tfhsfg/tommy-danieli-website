import React from "react";
import { Link } from "react-router-dom";

// מערך השאלות והתשובות במבנה הנתונים החדש שלך (q ו-a)
const faqs = [
  {
    q: "מהי ליבת התוכנית?",
    a: "ליבת התוכנית היא החזרת הריבונות והתושבים לצפון באמצעות יצירת עוגן כלכלי חסר תקדים, מתן פטורים מקיפים ממס הכנסה ומס חברות, ושדרוג דרמטי של איכות החיים, התחבורה והרפואה הדחופה באזור."
  },
  {
    q: "למה התוכנית מיועדת רק לקרית שמונה, שלומי ומטולה, כשכל יישובי הצפון סבלו במלחמה?",
    a: "יישובים אלו מהווים את חומת המגן העירונית הראשונה של מדינת ישראל בקו העימות. קריסתם הכלכלית והדמוגרפית מהווה איום אסטרטגי על המדינה כולה, ולכן יש צורך בטיפול שורש נקודתי ומיידי שיקרין על האזורו כולו."
  },
  {
    q: "מדוע הטבות המס הללו יעשו שינוי, אם הטבות המס הקיימות לא שינו עד כה את המציאות בצפון?",
    a: "התוכנית הנוכחית משלבת בין פטור ממס הכנסה ליחידים, פטור ממס חברות למעסיקים, ומענקי דיור משמעותיים - מה שיוצר תמריץ כלכלי חזק מספיק כדי להעביר חברות הייטק ומשפחות צעירות באופן קבוע."
  },
  {
    q: "מי יהיה זכאי להטבות פטור ממס הכנסה ליחיד?",
    a: "כל תושב שיקבע את מרכז חייו ביישובים המוגדרים בחוק ויתמיד במגורים בהם, בהתאם לקריטריונים המלאים המופיעים בנייר העמדה וקובץ החוק המלא."
  },
  {
    q: "מאיפה מגיע התקציב להטבות?",
    a: "התקציב מגיע מהסטת כספים קואליציוניים, סגירת משרדי ממשלה מיותרים וחלוקה מחדש של תקציבי הפיתוח הלאומיים מתוך הבנה ששיקום הצפון הוא המשימה הלאומית הדחופה ביותר."
  }
];

const infoCards = [
  { id: 1, icon: "fa-solid fa-tree-city", text: "כ-40% מהתושבים לא חזרו לקרית שמונה" },
  { id: 2, icon: "fa-solid fa-person-walking-luggage", text: "הדור הצעיר עוזב: גני ילדים ובתי ספר נסגרים" },
  { id: 3, icon: "fa-solid fa-couch", text: "עלייה של 50% באבטלה" }
];

const lawSteps = [
  {
    id: "01",
    title: "הצמחת אקו סיסטם כלכלי",
    bullets: [
      "<strong>אזור פטור ממס לתקופה מוגבלת:</strong> פטור מלא ממס חברות לתעשייה המקומית, חברות טכנולוגיה ותעשיות בטחוניות.",
      "50% הנחה בארנונה לעסקים",
      "מענקים להרחבת מפעלים קיימים והעתקת מפעלים לעיר",
      "סבסוד עלויות מעסיק לעובדים בשכר גבוה"
    ]
  },
  {
    id: "02",
    title: "עידוד החזרת התושבים והגירה",
    bullets: [
      "פטור מלא ממס הכנסה <strong>ליחידים</strong> עד מיליון ש\"ח בשנה (מוגבל ל-4-7 שנים)",
      "<strong>הלוואת מגורים בסך 400,000 ש\"ח לאקדמאים ובעלי מקצוע נדרשים</strong> – שתהפוך למענק רכישת דירה לאחר 7 שנות מגורים בעיר"
    ]
  },
  {
    id: "03",
    title: "שדרוג איכות החיים בצפון",
    bullets: [
      "<strong>חיבור הצפון עם הצפון:</strong> תגבור משמעותי למערך התחבורה הציבורית",
      "<strong>חיבור הצפון למרכז: טיסה ב-₪99!</strong> פתיחת המנחת בקרית שמונה וטיסות מסובסדות",
      "<strong>הקמת ומימון תפעול חדר מיון קדמי</strong> מודרני בקרית שמונה"
    ]
  }
];

export default function Regulations() {
  return (
    <div className="lawPageContainer almoni">
      
      {/* 1. באנר עליון (החלק הכהה) */}
      <section className="lawHero">
        <div className="lawHeroContent">
          <div className="lawHeroTextZone">
            <span className="lawHeroSub">תוכנית בנט לתיקון ישראל</span>
            <h1 className="lawHeroTitle">
              חוק <span className="starText">★</span> קרית שמונה
            </h1>
            <p className="lawHeroCallout">אסור לאבד את הצפון!</p>
            <button type="button" className="lawHeroBtn">אני רוצה לשמוע עוד</button>
          </div>
          <div className="lawHeroImageZone">
            <img src={`${import.meta.env.BASE_URL}images/naftali-profile.jpg`} alt="נפתלי בנט" />
          </div>
        </div>
      </section>

      {/* 2. חלק לבן - כרטיסי המידע */}
      <section className="lawStatsSection">
        <h2 className="lawStatsMainTitle">
          יישובים עירוניים צמודי גדר בצפון<br />
          המהווים חומת מגן לישראל,<br />
          <span className="dangerText">נטושים ונמצאים בסכנה קיומית!</span>
        </h2>
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
      </section>

      {/* 3. חלק אפרפר - תוכנית החוק */}
      <section className="lawPlanSection">
        <h2 className="lawPlanMainTitle">תוכנית החוק:</h2>
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
      </section>

      {/* 4. חלק אופ-ווייט - קריאה לממשלה והורדות */}
      <section className="lawFooterSection">
        <div className="lawCallToAction">
          <p className="ctaSub">חוק זה יהפוך את המגורים והעבודה בצפון למשתלמים, וימשוך אל כל האזור משפחות צעירות, עסקים וחברות.</p>
          <h3 className="ctaMain">
            אני קורא לממשלה המכהנת לא לחכות לאחרי הבחירות<br />
            אלא לפעול למען התושבים ולבצע את החוק – כבר עכשיו!
          </h3>
          <div className="ctaButtons">
            <button type="button" className="lawHeroBtn">להורדת קובץ החוק המלא</button>
            <button type="button" className="ctaWhiteBtn">החלטת ממשלה</button>
          </div>
        </div>

        {/* 5. אזור שאלות ותשובות בעיצוב והמבנה המקורי שלך */}
        <div className="eduSection">
          <h2 className="eduSectionTitle brand-blue">שאלות ותשובות</h2>
          <div className="eduFaq">
            {faqs.map((f, i) => (
              <details className="eduFaqItem" key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
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

    </div>
  );
}