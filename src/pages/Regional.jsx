import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Regional.css";

const programSteps = [
  {
    id: "א׳",
    title: "למידה ופיתוח",
    desc: "פתיחת כל מפגש ביחידת למידה ייעודית: העשרה וכלים מקצועיים, הכשרות משפטיות, סדנאות רטוריקה, ניהול קונפליקטים ופיתוח אישי ומקצועי לחברי המורחבת.",
  },
  {
    id: "ב׳",
    title: "מעקב ובקרה",
    desc: "יישור קו והסרת חסמים בשטח. סיכום סטטוס ביצוע מהמפגש הקודם, הצפת קשיים ואתגרים ייחודיים מהמחוזות והרשויות, ומציאת פתרונות משותפים בזמן אמת.",
  },
  {
    id: "ג׳",
    title: "אסטרטגיה ותכנון",
    desc: "מבט קדימה ויעדי מאקרו. סקירת התוכנית השנתית והתאמת המדיניות הארצית למחוזות ולרשויות, מתוך שאיפה לייצר מדיניות ריאלית, רלוונטית ומייצגת עבור כל גלגלי המועצה.",
  },
  {
    id: "ד׳",
    title: "קהילת עמיתים",
    desc: "שיתוף, התייעצות וחיבור. במה פתוחה ליושבי הראש לשתף בהצלחות, להציג יוזמות מקומיות ולבקש ייעוץ, חשיבה משותפת וגיבוי מחבריהם לפורום תוך פיתוח אקלים צוותי תומך.",
  },
];

const corePrinciples = [
  {
    icon: "fa-solid fa-hands-holding-child",
    text: "ליווי אישי ומענה רגשי המבוסס על הזדהות, תמיכה, יצירת שותפויות ולמידת עמיתים - כדי שאף בעל תפקיד לא ירגיש לבד במערכת.",
  },
  {
    icon: "fa-solid fa-scale-balanced",
    text: "מענה מקצועי הכולל מתן ייעוץ משפטי ואתי שוטף, ושימוש בפורום כפלטפורמה להקשבה לביקורת בונה ונקודות לשיפור מהשטח.",
  },
  {
    icon: "fa-solid fa-trowel-bricks",
    text: "מעבר מרעיונות תיאורטיים ליישום בשטח על ידי פישוט והנגשת כלים (תקנונים ברי-השגה) ותיאום מסרים קבוע בגלגלי המועצה.",
  },
];

const goals = [
  {
    title: "הטמעה מלאה בשטח",
    desc: "הנגשת עולם האתיקה והתקנונים כך שיהיו קלים ליישום עבור הנציגים בכלל בתי הספר והרשויות המקומיות.",
  },
  {
    title: "רשת עמיתים חזקה ומסונכרנת",
    desc: "קיום פגישות סדירות ותיאום מסרים קבוע כדי לוודא שכל גלגלי המועצה פועלים בסינרגיה ובסנכרון מלא.",
  },
  {
    title: "אירוע שיא מקצועי",
    desc: "הובלת כנס אתיקה ותקינות ארצי/מחוזי שישלב סדנאות מתקדמות לצד מרחב לחיזוק הקשרים הבינאישיים ותחושת השליחות.",
  },
];

const faqData = [
  {
    question: "מהי מטרת העל של פורום 'מורחבת אתיקה'?",
    answer: "להעצים ולחזק את יושבי ראש הוועדות האתיות-משפטיות במחוזות וברשויות, המהווים את הזרוע הביצועית של עולם האתיקה, ולהבטיח שהמדיניות הארצית תיושם בשטח בצורה מקצועית, עקבית ובלתי מסורבלת.",
  },
  {
    question: "מהי מסגרת הפעילות המתוכננת לפורום?",
    answer: "הפורום יקיים תשתית עבודה קבועה וידועה מראש של 12 מפגשים פרונטליים לצד 12 מפגשים מקוונים (אחת לשבועיים לסירוגין), אשר ייקבעו בלוח השנה כבר בפתח שנת הפעילות.",
  },
  {
    question: "כיצד התוכנית מתמודדת עם חוסר ההיכרות של התחום בבתי הספר?",
    answer: "התוכנית שמה דגש מיוחד על 'מעבר מתאוריה למעשה' באמצעות פישוט והנגשת כללי התקנונים והתקינות, והפיכתם לכלים פרקטיים ונוחים לשימוש עבור הנציגים בגלגלים הנמוכים יותר.",
  },
];

export default function Regional() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="rehabPage">
      <Banner title="מורחבת אתיקה" subtitle="פורום יו״רי הוועדות האתיות-משפטיות" />

      {/* 1. רציונל ותפיסת עולם */}
      <div className="eduSection rehabIntroSection">
        <h2 className="eduSectionTitle brand-blue">רציונל ותפיסת עולם</h2>
        <p className="eduSectionDesc">
          יושבי ראש הוועדות האתיות-משפטיות במחוזות וברשויות הם הזרוע הביצועית והחזקה ביותר של עולם האתיקה בישראל. עם זאת, תחום האתיקה והמשפט נוטה לעיתים להיות פחות מוכר בשטח הבית-ספרי והמקומי. העבודה שלנו ברמה המחוזית והארצית, משמעותית ככל שתהיה, אינה יכולה לחיות "בתוך עצמה" – כדי להוביל שינויי עומק אמיתיים, המדיניות חייבת לפגוש את השטח בצורה מקצועית, עקבית ובלתי מסורבלת, דרך העצמה וחיזוק של בעלי התפקידים המקומיים.
        </p>
        <p className="rehabScheduleInfo">
          <strong>מסגרת הפעילות:</strong> הפורום יקיים תשתית עבודה קבועה וידועה מראש של <strong>12 מפגשים פרונטליים</strong> לצד <strong>12 מפגשים מקוונים</strong> (אחת לשבועיים לסירוגין), אשר ייקבעו בלוח השנה כבר בפתח שנת הפעילות.
        </p>
      </div>

      {/* 2. מודל המפגש המובנה (ארבעת העוגנים) */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">מודל המפגש המובנה (ארבעת העוגנים)</h2>
        <div className="rehabProgramGrid">
          {programSteps.map((step, index) => (
            <div className="rehabProgramCard" key={index}>
              <span className="rehabProgramNumber">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. עקרונות הליבה ליישום */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">עקרונות הליבה ליישום המצע</h2>
        <div className="rehabFactsGrid">
          {corePrinciples.map((p, i) => (
            <div className="rehabFactCard" key={i}>
              <div className="rehabFactIconWrap">
                <i className={p.icon}></i>
              </div>
              <p className="rehabFactText">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. מדדי הצלחה */}
      <div className="eduSection rehabSuccessSection">
        <h2 className="rehabGoalsTitle">איך נדע שהצלחנו? (מדדי הצלחה)</h2>
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

      {/* 5. שאלות ותשובות - הועתק בדיוק מעמוד Education */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">שאלות ותשובות על הפורום</h2>
        <div className="eduFaq">
          {faqData.map((item, index) => (
            <div
              className={`eduFaqItem ${openFaq === index ? "eduFaqItemOpen" : ""}`}
              key={index}
            >
              <button className="eduFaqSummary" onClick={() => toggleFaq(index)}>
                {item.question}
                <span className="eduFaqMarker">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              <div className="eduFaqAnswerWrap">
                <div className="eduFaqAnswerInner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. כפתור חזרה לעמוד הבית */}
      <div className="rehabFooterLink">
        <Link to="/" className="brand-blue">
          <i className="fa-solid fa-arrow-right-long"></i> חזרה לעמוד הבית
        </Link>
      </div>
    </div>
  );
}
