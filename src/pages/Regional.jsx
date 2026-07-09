import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Regional.css";

// 1. נתוני ארבעת העוגנים של מודל המפגש מותאמים למבנה הכרטיס המפולג
const programSteps = [
  {
    id: "01",
    phase: "חלק א'",
    title: "למידה ופיתוח",
    focus: "העשרה וכלים מקצועיים",
    desc: "פתיחת המפגש ביחידת למידה ייעודית: הכשרות משפטיות, ניהול קונפליקטים, סדנאות רטוריקה, וכלים לניהול שוטף של הוועדות בשטח תוך דגש על שיפור התקינות בבתי הספר וברשויות.",
  },
  {
    id: "02",
    phase: "חלק ב'",
    title: "מעקב ובקרה",
    focus: "יישור קו והסרת חסמים",
    desc: "סיכום סטטוס ביצוע מהמפגש הקודם, הצפת קשיים ואתגרים ייחודיים מהמחוזות והרשויות, ומציאת פתרונות משותפים בזמן אמת.",
  },
  {
    id: "03",
    phase: "חלק ג'",
    title: "אסטרטגיה ותכנון",
    focus: "מבט קדימה ויעדי מאקרו",
    desc: "סקירת התוכנית השנתית והתאמת המדיניות הארצית למחוזות ולרשויות, מתוך שאיפה לייצר מדיניות ריאלית, רלוונטית ומייצגת עבור כל גלגלי המועצה.",
  },
  {
    id: "04",
    phase: "חלק ד'",
    title: "קהילת עמיתים",
    focus: "שיתוף, התייעצות וחיבור",
    desc: "במה פתוחה ליו״רים לשתף בהצלחות, להציג יוזמות מקומיות, ולבקש ייעוץ, חשיבה משותפת וגיבוי מחבריהם לפורום (פיתוח אקלים צוותי תומך).",
  },
];

// 2. עקרונות הליבה ודרכי עבודה (למעלה לפי הנחיית אור)
const coreFacts = [
  {
    icon: "fa-solid fa-handshake",
    text: "ליווי אישי, מענה מקצועי וקשר רציף: מתן מענה אישי לכל שותף ושותפה לדרך ברובד הרגשי והאישי (תמיכה, למידת עמיתים) וברובד המקצועי (ייעוץ משפטי ואתי שוטף והקשבה לביקורת בונה מהשטח).",
  },
  {
    icon: "fa-solid fa-rocket",
    text: "מעבר מרעיונות תיאורטיים להוצאה לפועל (יישום בשטח): פישוט והנגשת כלים (הפיכת עולם האתיקה והתקנונים לבר-השגה וקל ליישום בביס״ד) ותיאום מסרים וסנכרון קבוע בין כל גלגלי המועצה.",
  },
  {
    icon: "fa-solid fa-trophy",
    text: "אירוע שיא - כנס אתיקה ותקינות ארצי/מחוזי: יוזמה והובלה של כנס ייעודי בשיתוף חברי המורחבת המשלב תוכן מקצועי והכשרות עומק (סדנאות, סימולציות קונפליקטים) לצד גיבוש, חיבור והעלאת גאוות היחידה.",
  },
];

// 3. מדדי הצלחה ממוקדים
const goals = [
  {
    title: "מיסוד תשתיות עבודה",
    desc: "עמידה מלאה במכסת 12 המפגשים הפרונטליים ו-12 המפגשים המקוונים שנקבעו מראש בלוח השנה.",
  },
  {
    title: "סנכרון וגיבוי מלא לשטח",
    desc: "מתן מענה ופתרונות מוסדרים לחסמים והצפת קשיים מכלל המחוזות והרשויות בזמן אמת.",
  },
  {
    title: "הנגשה ושיפור התקינות בשטח",
    desc: "יישום מוצלח של הכלים המונגשים והתקנונים המפושטים ברמת בתי הספר והרשויות המקומיות.",
  },
];

export default function Regional() {
  return (
    <div className="rehabPage">
      {/* 1. באנר עליון */}
      <Banner
        image="/images/banner-default.jpg"
        title="פורום מורחבת אתיקה"
        description="מובילים שינויי עומק אמיתיים – מחברים את המדיניות הארצית לשטח בצורה מקצועית, עקבית ובלתי מסורבלת."
      />

      {/* 2. רציונל ותפיסת עולם */}
      <div className="eduSection">
        <div className="rehabIntroSection">
          <p className="eduSectionDesc">
            יושבי ראש הוועדות האתיות-משפטיות במחוזות וברשויות הם הזרוע הביצועית והחזקה ביותר של עולם האתיקה בישראל. עם זאת, תחום האתיקה והמשפט נוטה לעיתים להיות פחות מוכר בשטח הבית-ספרי והמקומי.
          </p>
          <p className="eduSectionDesc">
            העבודה שלנו ברמה המחוזית והארצית, משמעותית ככל שתהיה, אינה יכולה לחיות "בתוך עצמה" – כדי להוביל שינויי עומק אמיתיים, המדיניות חייבת לפגוש את השטח בצורה מקצועית, עקבית ובלתי מסורבלת, דרך העצמה וחיזוק של בעלי התפקידים המקומיים.
          </p>
          <div className="rehabScheduleInfo">
            <strong>מסגרת הפעילות:</strong> הפורום יקיים תשתית עבודה קבועה וידועה מראש של 12 מפגשים פרונטליים לצד 12 מפגשים מקוונים (אחת לשבועיים לסירוגין), אשר ייקבעו בלוח השנה כבר בפתח שנת הפעילות.
          </div>
        </div>
      </div>

      {/* 3. עקרונות הליבה ודרכי עבודה חדשות */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">עקרונות הליבה ודרכי העבודה</h2>
        <div className="rehabFactsGrid">
          {coreFacts.map((fact, index) => (
            <div className="rehabFactCard" key={index}>
              <div className="rehabFactIconWrap">
                <i className={fact.icon}></i>
              </div>
              <p className="rehabFactText">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. מודל המפגש המובנה (ארבעת העוגנים) */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">מודל המפגש</h2>
        <p style={{ textAlign: "center", color: "var(--text)", opacity: 0.8, maxWidth: "700px", margin: "0 auto 30px" }}>
          כל מפגש של הפורום ייבנה על פי מודל קבוע וסדור, המבטיח שילוב בין למידה מקצועית, מעקב הדוק, אסטרטגיה ותמיכת עמיתים:
        </p>
        
        <div className="rehabProgramWrapper">
          <div className="rehabProgramGrid">
            {programSteps.map((step, index) => (
              <div className="rehabProgCard" key={index}>
                <div className="rehabProgCardHeader">
                  <span className="rehabCardPhase">{step.phase}</span>
                  <h3 className="rehabProgTitle">{step.title}</h3>
                  <div className="rehabProgFocus">{step.focus}</div>
                </div>
                <div className="rehabProgCardBody">
                  <p className="rehabProgDesc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. מדדי הצלחה */}
      <div className="rehabSuccessSection">
        <h2 className="rehabGoalsTitle">איך נדע שהצלחנו?</h2>
        <div className="rehabGoalsList">
          {goals.map((g, i) => (
            <div className="rehabGoalItem" key={i}>
              <i className="fa-solid fa-check rehabGoalCheck"></i>
              <div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. כפתור תחתון לחזרה לכל התוכניות */}
      <div className="readMoreContainer">
        <Link to="/plans" className="readMoreButton">
          לכל התוכניות 
        </Link>
      </div>
    </div>
  );
}
