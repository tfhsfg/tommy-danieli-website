import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Regulations.css";

// 3 עקרונות החיבור והשותפות
const connectionPrinciples = [
  {
    icon: "fa-solid fa-lightbulb",
    title: "הבנת העקרונות מאחורי התקנון",
    desc: "לפני שמשנים סעיפים, מבינים את ה'למה'. נפתח בתהליך למידה והסברה בגובה העיניים בכל הגלגלים, כדי להנגיש את הערכים החוקתיים והאתיים. כשהשטח מבין את העקרונות, הוא יכול להשפיע ולדייק את התקנון מתוך חיבור אמיתי."
  },
  {
    icon: "fa-solid fa-comments",
    title: "ערוץ פתוח להצעות מהשטח",
    desc: "התקנון נכתב יחד איתכם. נפתח תיבת הצעות דיגיטלית ארצית שבה כל נציג ונציגה יוכלו להציף את האתגרים שנתקלו בהם ביומיום, לשתף בצרכים האמיתיים של המועצות ולעזור לנו להתאים את חוקי המשחק למציאות המשתנה."
  },
  {
    icon: "fa-solid fa-cubes",
   title: "ועדת היגוי רחבה ומייצגת",
    desc: "מיון וסינון ההצעות יתבצעו בוועדת היגוי רחבה, בעלת ייצוג שווה ומלא מכל שבעת המחוזות, שתורכב ממזכירות המועצה המורחבת הארצית ובשיתוף עם יו״ר הוועדות האתיות-משפטיות במחוזות.",
}
];

export default function BylawsOpening() {
  return (
    <div className="bylawsPage">
      <Banner         
        image="/images/student-writing-blackboard.jpg"
        title="פתיחת תקנון העל" 
        subtitle="מבינים את העקרונות, מחברים את השטח ומחזקים את השותפות – תשפ״ז" 
      />

      {/* חזון מחבר ובגובה העיניים */}
      <div className="eduSection bylawsIntroSection">
        <h2 className="eduSectionTitle brand-blue">התקנון הוא מה שמאחד אותנו</h2>
        <p className="eduSectionDesc">
          תקנון העל הוא לא מסמך בירוקרטי מרוחק – הוא התשתית המשותפת שמאפשרת לכולנו לעבוד, ליצור ולהשפיע ביחד. הוא הלב ששומר על המבנה הדמוקרטי ומגדיר את חוקי המשחק של עולם המועצות, מהגלגל הבית-ספרי ועד למליאה הארצית.
        </p>
        <p className="eduSectionDesc">
          אחת לחמש שנים התקנון נפתח לבחינה מחדש, וקדנציית תשפ״ז היא השנה הזו. אני מאמין ששינוי אמיתי מגיע מהשטח. השנה נפעל יחד כדי לחבר את התקנון לשטח, להבין את העקרונות שמאחוריו, וליצור בסיס חזק שיעצים את המועצות בכל רחבי הארץ.
        </p>
      </div>

      {/* גריד 3 עקרונות השותפות */}
      <div className="eduSection">
        <div className="bylawsPowerGrid">
          {connectionPrinciples.map((principle, i) => (
            <div className="bylawsPowerCard" key={i}>
              <div className="bylawsPowerIcon">
                <i className={principle.icon}></i>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>

      

      {/* כפתור חזרה מהיר */}
      <div className="readMoreContainer">
        <Link to="/plans" className="readMoreButton">
          לכל התוכניות
        </Link>
      </div>
    </div>
  );
}