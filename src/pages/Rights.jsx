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
      "הקמת צוות משותף <strong>'אתית-דוברות'</strong> למענה פניות תלמידים מכל רחבי הארץ לתמיכה ומיון במקרים של הפרת זכויות והפניה לגלגל הרלוונטי.",
      "הנגשת חוזרי מנכ\"ל וחוק זכויות התלמיד בפורמט דיגיטלי, קליל ומובן לכל תלמיד ונציג במערכת."
    ]
  },
  {
    id: "02",
    title: "מאבק בניצול נוער עובד",
    bullets: [
      "יצירת שיתוף פעולה הדוק עם איגודי עובדים, משרד העבודה והאגף לאכיפת דיני עבודה להגברת הפיקוח והפיגוע במעסיקים מנצלים.",
      "חיזוק העבודה המשותפת מול משרד המשפטים והנגשת האתר והפרטים לתלונה במקרי הפרת זכויות בעבודה."
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

      {/* 2. פתיח בגובה העיניים - ממוקד ותכלס */}
      <div className="eduSection rightsIntroSection" style={{ padding: "30px 28px 24px", textAlign: "center" }}>
        <h3 className="brand-blue" style={{ fontSize: "22px", marginTop: "0", marginBottom: "16px", fontWeight: "bold" }}>
          הגב שלכם בשטח
        </h3>
        <p style={{ maxWidth: "850px", margin: "0 auto", textAlign: "right", fontSize: "18px", lineHeight: "1.6" }}>
          זכויות הן לא המלצה – לא מול מורים והנהלות בבתי הספר, ולא מול מעסיקים בעבודה שמנצלים את זה שאנחנו צעירים. אנחנו פה כדי לוודא שכל אחד מאיתנו יודע בדיוק מה מגיע לו, ומקבל גיבוי מלא ומעשים בשטח כדי שאף אחד לא ישתיק אותו.
        </p>
      </div>

      {/* 3. כרטיסי המצב והאתגרים הנוכחיים */}
      <div id="challenges-section" className="eduSection rightsChallengesSection" style={{ paddingTop: "20px" }}>
        <h2 className="eduSectionTitle brand-blue">
          האתגרים שעומדים בפנינו
        </h2>
        <p style={{ paddingBottom: "40px" }}>
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
        <h2 className="eduSectionTitle brand-blue">מה ניצור בקדנציה הקרובה?</h2>
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
