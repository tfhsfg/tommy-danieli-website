import React from "react";
import { Link } from "react-router-dom";
import "./Plans.css";

// כרטיסי התוכניות תואמים אחד-לאחד לעמודים האמיתיים שבתפריט הנפתח ("מיישרים קו"),
// וכל כפתור "למידע המלא" מקשר לעמוד המלא של אותה תוכנית.
const planItems = [
  {
    id: 1,
    title: "הטמעת השפה הארגונית",
    icon: "fa-solid fa-sitemap",
    description: "המועצה היא הפרלמנט הסטטוטורי הנבחר של מאות אלפי בני נוער – ולא 'ועדת קישוט'. נטמיע שפה ארגונית אחידה, מקצועית וחזקה בכל הגלגלים, מבית הספר ועד הארצי, שתעניק לכל מועצה לגיטימציה מול השלטון המקומי וגיבוי חוקתי מלא לנציג הבודד בשטח.",
    targetTitle: "מטרה",
    targetText: "כל מועצה בארץ פועלת בצורה דמוקרטית, שקופה ומקצועית – ומקבלת את הכבוד והסמכות שמגיעים לה כגוף שלטוני.",
    to: "/organizationallanguage"
  },
  {
    id: 2,
    title: "פתיחת תקנון העל",
    icon: "fa-solid fa-scroll",
    description: "אחת לחמש שנים נפתח תקנון העל לבחינה מחדש – וקדנציית תשפ\"ז היא השנה הזו. נוביל תהליך למידה והסברה בגובה העיניים, נפתח ערוץ הצעות דיגיטלי ארצי לשטח, וניצור 'תקנון ברירת מחדל' שיחזק את הוועדות המקומיות בכל רחבי הארץ.",
    targetTitle: "מטרה",
    targetText: "תקנון שצומח מהשטח, מדבר בגובה העיניים ומאושר יחד במעמד הוועידה הארצית.",
    to: "/regulations"
  },
  {
    id: 3,
    title: "הוועדה האתית-משפטית",
    icon: "fa-solid fa-scale-balanced",
    description: "הופכים את הוועדה מגוף של דיונים מנותקים למנוע של פרויקטים ומדיניות עבור השטח כולו. נבסס תרבות של אמון ושותפות, נאפיין יחד את הצרכים הדחופים של הנציגים, ונקים צוותי משימה שיפיקו כלים ותוצרים מעשיים לכל גלגלי הנציגות.",
    targetTitle: "מטרה",
    targetText: "ועדה שמעניקה לנציגים הגנה משפטית, סמכויות ברורות וגב מלא מול המערכת.",
    to: "/committee"
  },
  {
    id: 4,
    title: "מורחבת יו״רי האתיקה",
    icon: "fa-solid fa-people-group",
    description: "יושבי הראש של הוועדות האתיות-משפטיות במחוזות וברשויות הם הזרוע הביצועית של עולם האתיקה. נקיים תשתית עבודה קבועה של 12 מפגשים פרונטליים ו-12 מקוונים, נחבר את המדיניות הארצית לשטח בצורה מקצועית ובלתי מסורבלת, ונעניק ליווי אישי ומקצועי לכל שותף לדרך.",
    targetTitle: "מטרה",
    targetText: "מדיניות ארצית שפוגשת את השטח בעקביות – עם מענה וגיבוי מלא לכל מחוז ורשות.",
    to: "/regional"
  },
  {
    id: 5,
    title: "חקיקה בכנסת",
    icon: "fa-solid fa-landmark",
    description: "מועצת התלמידים והנוער הארצית מייצגת מיליון בני נוער, אך מעמדה המשפטי פגיע ולא מעוגן בחוק. נוביל את חיקוק 'חוק המועצה הארצית' בכנסת: הכרה סטטוטורית בכל הגלגלים, חובת היוועצות, עצמאות לתקנון העל ותקצוב מעוגן.",
    targetTitle: "מטרה",
    targetText: "עיגון כוחן של המועצות בספר החוקים של מדינת ישראל – בלי תלות ברצונם הטוב של מבוגרים.",
    to: "/legislation"
  },
  {
    id: 6,
    title: "מסמך הוועידה ה-30",
    icon: "fa-solid fa-file-signature",
    description: "מיישמים את החלטות הוועידה ה-30 דרך שומרי הסף של הארגון, בלי סיסמאות על הנייר. נמסד מנגנוני תקשורת וקבלת החלטות שקופים (היגד 6), ונשפר את תדמית המועצה דרך הטמעת שפה ארגונית אחידה וחיזוק התקינות בשטח (היגד 7).",
    targetTitle: "מטרה",
    targetText: "ארגון חזק, מאוחד ומקצועי פנימה – התשתית שמאפשרת לכל שאר מטרות הנוער להתגשם.",
    to: "/conference"
  },
  {
    id: 7,
    title: "זכויות תלמידים ונוער",
    icon: "fa-solid fa-file-signature",
    description: "מיישמים את החלטות הוועידה ה-30 דרך שומרי הסף של הארגון, בלי סיסמאות על הנייר. נמסד מנגנוני תקשורת וקבלת החלטות שקופים (היגד 6), ונשפר את תדמית המועצה דרך הטמעת שפה ארגונית אחידה וחיזוק התקינות בשטח (היגד 7).",
    targetTitle: "מטרה",
    targetText: "ארגון חזק, מאוחד ומקצועי פנימה – התשתית שמאפשרת לכל שאר מטרות הנוער להתגשם.",
    to: "/conference"
  }
];

export default function Plans() {
  return (
    <section className="plansPage almoni">
      <div className="plansHeader">
        <h1 className="brand-blue">תוכניות העבודה – מיישרים קו</h1>
        <p className="subtitle">כל התחומים שאוביל כיו״ר הוועדה האתית-משפטית הארצית – לחצו למידע המלא</p>
      </div>

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
              
              <hr className="planDivider" />
              
              {/* אזור תחתון: מטרה מצד ימין, כפתור מצד שמאל */}
              <div className="planFooterArea">
                <div className="planTargetArea">
                  <span className="planTargetLabel">{item.targetTitle}</span>
                  <p className="planTargetText">{item.targetText}</p>
                </div>
                
                {item.to ? (
                  <Link to={item.to} className="readMoreGreenBtn">
                    למידע המלא
                  </Link>
                ) : (
                  <button type="button" className="readMoreGreenBtn">
                    למידע המלא
                  </button>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}