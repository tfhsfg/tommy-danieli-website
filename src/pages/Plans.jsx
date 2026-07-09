import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Plans.css";

// כרטיסי התוכניות תואמים אחד-לאחד לעמודים האמיתיים שבתפריט הנפתח ("מיישרים קו"),
// וכל כפתור "למידע המלא" מקשר לעמוד המלא של אותה תוכנית.
const planItems = [
  {
    id: 1,
    title: "הטמעת השפה הארגונית",
    icon: "fa-solid fa-sitemap",
    description: "המועצה היא הפרלמנט הסטטוטורי הנבחר של מאות אלפי בני נוער – ולא 'ועדת קישוט'. נטמיע שפה ארגונית אחידה, מקצועית וחזקה בכל הגלגלים, מבית הספר ועד הארצי, שתעניק לכל מועצה לגיטימציה מול השלטון המקומי וגיבוי חוקתי מלא לנציג הבודד בשטח.",
    to: "/organizationallanguage"
  },
  {
    id: 2,
    title: "פתיחת תקנון העל",
    icon: "fa-solid fa-scroll",
    description: "אחת לחמש שנים נפתח תקנון העל לבחינה מחדש – וקדנציית תשפ\"ז היא השנה הזו. נוביל תהליך למידה והסברה בגובה העיניים, נפתח ערוץ הצעות דיגיטלי ארצי לשטח, וניצור 'תקנון ברירת מחדל' שיחזק את הוועדות המקומיות בכל רחבי הארץ.",
    to: "/regulations"
  },
  {
    id: 3,
    title: "הוועדה האתית-משפטית",
    icon: "fa-solid fa-scale-balanced",
    description: "הופכים את הוועדה מגוף של דיונים מנותקים למנוע של פרויקטים ומדיניות עבור השטח כולו. נבסס תרבות של אמון ושותפות, נאפיין יחד את הצרכים הדחופים של הנציגים, ונקים צוותי משימה שיפיקו כלים ותוצרים מעשיים לכל גלגלי הנציגות.",
    to: "/committee"
  },
  {
    id: 4,
    title: "מורחבת יו״רי האתיקה",
    icon: "fa-solid fa-people-group",
    description: "יושבי הראש של הוועדות האתיות-משפטיות במחוזות וברשויות הם הזרוע הביצועית של עולם האתיקה. נקיים תשתית עבודה קבועה של 12 מפגשים פרונטליים ו-12 מקוונים, נחבר את המדיניות הארצית לשטח בצורה מקצועית ובלתי מסורבלת, ונעניק ליווי אישי ומקצועי לכל שותף לדרך.",
    to: "/regional"
  },
  {
    id: 5,
    title: "חקיקה בכנסת",
    icon: "fa-solid fa-landmark",
    description: "מועצת התלמידים והנוער הארצית מייצגת מיליון בני נוער, אך מעמדה המשפטי פגיע ולא מעוגן בחוק. נוביל את חיקוק 'חוק המועצה הארצית' בכנסת: הכרה סטטוטורית בכל הגלגלים, חובת היוועצות, עצמאות לתקנון העל ותקצוב מעוגן.",
    to: "/legislation"
  },
  {
    id: 6,
    title: "מסמך הוועידה ה-30",
    icon: "fa-solid fa-file-signature",
    description: "מיישמים את החלטות הוועידה ה-30 דרך שומרי הסף של הארגון, בלי סיסמאות על הנייר. נמסד מנגנוני תקשורת וקבלת החלטות שקופים (היגד 6), ונשפר את תדמית המועצה דרך הטמעת שפה ארגונית אחידה וחיזוק התקינות בשטח (היגד 7).",
    to: "/conference"
  },
  {
    id: 7,
    title: "זכויות תלמידים ונוער",
    icon: "fa-solid fa-hand-fist",
    description: "מיישמים את החלטות הוועידה ה-30 דרך שומרי הסף של הארגון, בלי סיסמאות על הנייר. נמסד מנגנוני תקשורת וקבלת החלטות שקופים (היגד 6), ונשפר את תדמית המועצה דרך הטמעת שפה ארגונית אחידה וחיזוק התקינות בשטח (היגד 7).",
    to: "/conference"
  }
];

export default function Plans() {
  return (
    <div className="plansPage almoni">
      <Banner
        title="תוכניות העבודה"
        description="כל התחומים שאוביל כיו״ר הוועדה האתית-משפטית הארצית – לחצו למידע המלא"
      />

      <div className="plansContainer">
        {planItems.map((item) => (
          <div className="planCard" key={item.id}>

            {/* חלק ימין - האייקון על הרקע הכחול הכהה */}
            <div className="planCardIconSide">
              <i className={`${item.icon} planIcon`}></i>
            </div>

            {/* חלק שמאל - תוכן הטקסט והכפתור */}
            <div className="planCardTextSide">
              <h2 className="planCardTitle">{item.title}</h2>
              <p className="planCardDesc">{item.description}</p>

              {/* אזור הכפתור "למידע המלא" - נצמד לתחתית הכרטיס */}
              <div className="planCardActions">
                {item.to ? (
                  <Link to={item.to} className="readMoreRedBtn">
                    למידע המלא
                  </Link>
                ) : (
                  <button type="button" className="readMoreRedBtn">
                    למידע המלא
                  </button>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
