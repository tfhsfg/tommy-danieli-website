import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Rights.css";

// 3 עקרונות המצב והאתגרים הנוכחיים בשטח
const challengesCards = [
  { id: 1, icon: "fa-solid fa-graduation-cap", text: "חוסר מודעות קיצוני לזכויות תלמידים בתוך כותלי בתי הספר" },
  { id: 2, icon: "fa-solid fa-user-slash", text: "ניצול מוגבר של בני נוער עובדים בשוק התעסוקה הפרטי" },
  { id: 3, icon: "fa-solid fa-gavel", text: "היעדר כתובת משפטית נגישה, מהירה ונטולת בירוקרטיה לנציגים בשטח" }
];

// תוכנית הפעולה - בית הספר והעבודה
const rightsSteps = [
  {
    id: "01",
    title: "הגנת זכויות תלמידים בבתי הספר",
    bullets: [
      "הקמת <strong>'קו חם אקטיבי'</strong> מטעם הוועדה האתית-משפטית הארצית לדיווח מיידי על הפרת זכויות, השעיות לא חוקיות או פגיעה בנציגויות.",
      "הנגשת חוזרי מנכ\"ל וחוק זכויות התלמיד בפורמט דיגיטלי, קליל ומובן לכל תלמיד ונציג במערכת.",
      "מתן גיבוי וליווי משפטי מלא למועצות הרשותיות והבית-ספריות מול הנהלות מוסדות החינוך במקרי קיצון."
    ]
  },
  {
    id: "02",
    title: "מאבק בניצול נוער עובד",
    bullets: [
      "יצירת שיתוף פעולה הדוק עם איגודי עובדים, משרד העבודה והאגף לאכיפת דיני עבודה להגברת הפיקוח והפיגוע במעסיקים מנצלים.",
      "קיום קמפיינים ארציים להסברת זכויות הנוער העובד: שכר מינימום, שעות נוספות, הפסקות, נסיעות והחזרי נסיעות.",
      "הקמת צוות משימה משפטי שילווה בני נוער שזכויותיהם בעבודה נפגעו ויסייע להם מול הגורמים הרלוונטיים."
    ]
  }
];

export default function Rights() {
  return (
    <section className="rightsPageContainer almoni">

      {/* 1. באנר עליון */}
      <Banner
        image="/images/banner-rights.jpg" 
        title="הגנת זכויות הנוער והתלמיד"
        description={"מפסיקים לשתוק על פגיעה בזכויות -\nמחזירים את הכוח לתלמידים בבתי הספר וממגרים את הניצול בשוק העבודה!"}
      />

      {/* 2. פתיח וחזון מנהיגותי */}
      <div className="eduSection rightsIntroSection" style={{ padding: "56px 0 20px" }}>
        <h2 className="eduSectionTitle brand-blue" style={{ textAlign: "center", marginBottom: "20px" }}>
          הזרוע המגינה של מיליון בני נוער
        </h2>
        <p style={{ maxWidth: "850px", margin: "0 auto 30px", textAlign: "justify", fontSize: "18px", lineHeight: "1.6" }}>
          הוועדה האתית-משפטית בראשותי לא תהיה ועדה אקדמית של ניסוח ניירות עמדה בלבד, אלא <strong>המגן המשפטי החי והנושם של הנוער בשטח</strong>. זכויות הן לא המלצה – לא בבית הספר מול הנהלות ומורים, ולא במקומות העבודה מול מעסיקים שמנצלים את תמימותם של בני נוער. התפקיד שלנו הוא לוודא שכל תלמיד עובד ונציג יודע בדיוק מה מגיע לו, ומקבל את הגיבוי הבלתי מתפשר של המועצה הארצית כדי לעמוד על שלו.
        </p>
      </div>

      {/* 3. כרטיסי המצב והאתגרים הנוכחיים */}
      <div id="challenges-section" className="eduSection rightsChallengesSection" style={{ paddingTop: "20px" }}>
        <h2 className="eduSectionTitle brand-blue">
          השטח זועק לשינוי: האתגרים שעומדים בפנינו
        </h2>
        <p style={{ fontBottom: "40px" }}>
          במשך שנים הנוער סובל מחוסר אכיפה ומחוסר מודעות קריטי. הגיע הזמן לשים לזה סוף, לבנות מנגנוני הגנה חזקים ולייצר הרתעה אמיתית.
        </p>
        <div className="rightsChallengesGrid" style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
          {challengesCards.map((card) => (
            <div className="rightsChallengeCard" key={card.id}>
              <div className="rightsChallengeIconWrap">
                <i className={card.icon}></i>
              </div>
              <p className="rightsChallengeText">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. תוכנית העבודה והפתרונות */}
      <div className="eduSection rightsPlanSection">
        <h2 className="eduSectionTitle brand-blue">תוכנית ההגנה: מה נשנה בקדנציה הקרובה?</h2>
        <div className="rightsPlanGrid"> 
          {rightsSteps.map((step) => (
            <div className="rightsPlanCard" key={step.id}>
              <span className="rightsPlanNumber">{step.id}</span>
              <h3 className="rightsPlanCardTitle">{step.title}</h3>
              <ul className="rightsPlanBullets">
                {step.bullets.map((bullet, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
                ))}
              </ul>
            </div>
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
