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
    title: "בסיס לחיזוק תקנון הוועדות",
    desc: "מייצרים תשתית מובנית ונגישה ('תקנון ברירת מחדל') המבוססת על עקרונות היסוד של המועצה. כל מועצה רשותית או בית-ספרית תוכל לאמץ את המודל הזה בקלות, לחסוך בירוקרטיה, ולחזק באופן ישיר את הוועדות המקומיות שלה."
  }
];

export default function BylawsOpening() {
  return (
    <div className="bylawsPage">
      <Banner 
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
          אחת לחמש שנים התקנון נפתח לבחינה מחדש, וקדנציית תשפ״ז היא השנה הזו. כיו״ר הוועדה האתית-משפטית הארצית, אני מאמין ששינוי אמיתי מגיע מהשטח. השנה נפעל יחד כדי לחבר את התקנון אליכם, להבין את העקרונות שמאחוריו, וליצור בסיס חזק שיעצים את הוועדות בכל רחבי הארץ.
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

      {/* סיכום חגיגי המדגיש אחדות */}
      <div className="eduSection bylawsSummaryFocus">
        <div className="bylawsFocusContent">
          <h2>מאשרים יחד את השפה המשותפת בוועידה הארצית</h2>
          <p>
            כל התובנות, הרעיונות והסעיפים שנדייק יחד לאורך השנה יתנקזו למעמד המשותף והגדול ביותר שלנו – <strong>הוועידה הארצית</strong>. 
          </p>
          <p>
            שם, מול מאות נציגים וצירים מכל המחוזות, נציג ונאשר יחד תקנון שצומח מהשטח, מדבר בגובה העיניים ומעניק לכולנו את הכלים הטובים ביותר להוביל ולהנהיג.
          </p>
          <div className="bylawsBadge">התשתית שלנו. השותפות של כולנו.</div>
        </div>
      </div>

      {/* כפתור חזרה מהיר */}
      <div className="readMoreContainer">
        <Link to="/" className="readMoreButton">
          חזרה לעמוד הראשי
        </Link>
      </div>
    </div>
  );
}