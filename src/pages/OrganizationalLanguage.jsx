import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./OrganizationalLanguage.css";

// נתוני ציר הזמן הטכני של רותם שעוברים לתוך הרכיב המתקפל בתחתית
const timelineSteps = [
  {
    phase: "תחנה 1",
    title: "התנעה, חשיפה ומנהל מנהלי",
    time: "פברואר – ספטמבר",
    details: [
      "פגישות היגוי ותיאום ברמות הגבוהות ביותר (גור, איתן ומנכ״ל משרד החינוך) להבטחת הקצאת 4 ימי עבודה בשבוע למנחה המחוזי.",
      "עירוב מערך הביקורת והכרזה רשמית על המנגנון בוועידה הארצית (לפני מאי ויוני).",
      "ספטמבר: הפצת חוזר מפורט למינהל חברה ונוער במחוזות המגדיר לוחות זמנים, סטנדרטים ותוכן של 'תיק מועצה' מובנה.",
      "טרום שנת הלימודים: ישיבות הטמעה לפיקוח המחוזי, ממוני חח״ק ומזכירויות, לצד ישיבות התנעה מחוזיות מול הפיקוח הרשותי."
    ]
  },
  {
    phase: "תחנה 2",
    title: "המפץ הדמוקרטי בשטח",
    time: "אוקטובר – נובמבר",
    details: [
      "אוקטובר: סיום תהליך הקמת הכיתות ובחירות דמוקרטיות, חשאיות ותקינות למועצות הבית-ספריות.",
      "נובמבר: סיום מבצע הבחירות הרשמי ברמת הרשויות והקמת הנציגויות המחוזיות השונות ברחבי הארץ."
    ]
  },
  {
    phase: "תחנה 3",
    title: "מעקב, סנכרון וישיבות סטטוס",
    time: "דצמבר – ינואר",
    details: [
      "קיום סמינרי חנוכה ממוקדים ופורום יו״רים/סיו״רים מחוזי וארצי לסנכרון מטרות.",
      "יציאה להערכות לקראת דוחות ביקורת בשטח ומיפוי ראשוני של אתגרי מנהל תקין.",
      "קיום ישיבות סטטוס הדוקות ברמת בית הספר (מול רכזי החח״ק) וברמת הרשות (מול מנהלי מחלקות הנוער)."
    ]
  },
  {
    phase: "תחנה 4",
    title: "ועדות אכיפה מחוזיות בשטח",
    time: "מרץ",
    details: [
      "הקמת צוותי סיור מחוזיים המורכבים ממפקח רשותי, רפרנט מנהיגות, נציג המועצה המחוזית ובוגר/ת המועצה.",
      "הצוותים יוצאים פיזית אל הרשויות השונות על מנת לבחון מקרוב את תקינות הפעילות, מתן המענה לנציגים והטמעת השפה הארגונית."
    ]
  },
  {
    phase: "תחנה 5",
    title: "יישום, הערכה והוקרה",
    time: "אפריל – ינואר",
    details: [
      "אפריל - מאי: יישום מסקנות הסיורים, תיקון ליקויים מבניים בשטח, וחיזוק המועצות המקומיות הזקוקות לתמיכה.",
      "מאי - יוני: קיום אירועי הוקרה והערכה ברמת הרשות או המחוז למועצות שהפגינו מצוינות ארגונית ומשילות דמוקרטית למופת."
    ]
  }
];

export default function OrganizationalLanguage() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  return (
    <div className="ethicsPage">
      
      {/* 1. באנר עליון – ניסוח ממוקד שותפות, כוח והעצמה */}
      <Banner
        image="/images/room-business-meeting.jpg"
        title="מיישרים קו בשפה הארגונית"
        description="מחזירים את הכוח והסמכות לשטח – מטמיעים סטנדרט מקצועי, אחיד וחזק שמגן על הנציגים וממצב את המועצה כגוף שלטוני מוערך!"
      />

      {/* 2. מבוא וחזון – מנרטיב מאיים ומבני, לנרטיב של עוצמה ולגיטימציה */}
      <div className="orgLanguagePage">
        <div className="orgIntroSection">
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "var(--text)", marginBottom: "24px" }}>
            מועצות התלמידים והנוער בישראל הן ההגוף הרשמי הנבחר והמייצג של מאות אלפי בנות ובני נוער במדינת ישראל. כדי לייצר כוח פוליטי אמיתי ויכולת השפעה מול משרדי הממשלה והשלטון המקומי, אנחנו חייבים להציג חזית מקצועית, אחידה וחזקה בכל הדרגים: בבית הספר, ברשות, במחוז ובארצי.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "var(--text)" }}>
            תפיסת <strong>"השפה הארגונית"</strong> היא לא בירוקרטיה מעייפת – היא קוד ההפעלה והמצפן שיבטיח שכל מועצה בארץ פועלת בצורה דמוקרטית, שקופה ומקצועית, ומקבלת את הלגיטימציה והכבוד המלאים שמגיעים לה מול בעלי התפקידים במערכת.
          </p>

          <div className="orgStrategicQuote">
            "השפה הארגונית היא המגן החוקתי של הנציג בשטח. כשאנחנו עובדים לפי סטנדרט מקצועי ברור, המבוגרים כבר לא יכולים להתייחס אלינו כאל חוג – הם נאלצים להקשיב לנו כאל שותפים שווים לשלטון."
          </div>
        </div>

        {/* 3. למה השפה הארגונית קריטית? – פירוט היתרונות לנציג */}
        <div className="eduSection" style={{ marginBottom: "50px" }}>
          <h2 className="eduSectionTitle brand-blue" style={{ textAlign: "center", marginBottom: "35px" }}>
            כיצד השפה הארגונית מחזקת את המועצה שלכם בפועל?
          </h2>
          <div className="eduGrid">
            <div className="eduCard">
              <div className="eduCardHeader">
                <h3 className="eduCardTitle">לגיטימציה מול השלטון המקומי</h3>
              </div>
              <p className="eduCardText">
                כשמועצה רשותית פועלת על פי פרוטוקולים משפטיים, תקנונים ברורים ומנהל תקין, ראש העיר ומנהל אגף החינוך מחויבים להתייחס אליכם כאל גוף שלטוני רציני שמקבלים איתו החלטות, ולא כאל גוף חברתי שניתן לבטל.
              </p>
            </div>

            <div className="eduCard">
              <div className="eduCardHeader">
                <h3 className="eduCardTitle">הגנה וגיבוי מלא לנציג הבודד</h3>
              </div>
              <p className="eduCardText">
                היכרות מעמיקה של השטח עם השפה הארגונית מעניקה לכם – הנציגים בבתי הספר וברשויות – את הכלים והגיבוי החוקתי לעמוד על הזכויות שלכם ושל חבריכם מול מנהלים או בעלי תפקידים שמנסים להצר את צעדיכם.
              </p>
            </div>

            <div className="eduCard">
              <div className="eduCardHeader">
                <h3 className="eduCardTitle">חיבור אמיתי מהארצי ועד לביס"ד</h3>
              </div>
              <p className="eduCardText">
                השפה המשותפת שוברת את הנתק ההיסטורי בארגון. היא מבטיחה שהקול של הנציג בבית הספר ישפיע ישירות על החלטות המועצה הארצית, ושהישגים פוליטיים ברמה הארצית יחלחלו מיד חזרה אליכם לשטח.
              </p>
            </div>
          </div>
        </div>
{/* 4. האתגרים בשטח והמענה האסטרטגי – כרטיסי אתגר ופתרון מודרניים במקום טבלה */}
<div className="eduSection" style={{ marginBottom: "50px" }}>
  <h2 className="eduSectionTitle brand-blue" style={{ textAlign: "center", marginBottom: "15px" }}>
    האתגרים המובנים בשטח ודרכי ההתמודדות האסטרטגיות
  </h2>
  <p style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 30px", fontSize: "16px", color: "var(--text)", lineHeight: "1.6" }}>
    הטמעת תהליכי עבודה מקצועיים ומשילות דמוקרטית דורשת מנהיגות קשובה ונחושה. הנה הדרך שבה נתמוך בנציגים ונתמודד יחד עם החסמים המרכזיים:
  </p>

  <div className="strategicSolutionsGrid">
    
    {/* כרטיס 1 */}
    <div className="solutionCard">
      <div className="solCardTop">
        <div className="solBadge challenge">האתגר בשטח</div>
        <h3 className="solCardHeading">חוסר אחידות בנהלים בשטח</h3>
        <p className="solCardText">מועצות ברשויות שונות פועלות ללא כללים אחידים, מה שמחליש את מעמדן מול הרשות המקומית ומותיר אותן ללא קול אמיתי.</p>
      </div>
      <div className="solCardBottom">
        <div className="solBadge action">הפתרון האסטרטגי שלנו</div>
        <p className="solCardContent">
          <strong>מיסוד מעמד פדגוגי וחוקתי:</strong> ננגיש את השפה הארגונית ככלי עבודה מעשי שיעניק לכל מועצה הכרה רשמית, לגיטימציה וגיבוי מקצועי מלא מהדרג המחוזי והארצי מול כל הגורמים.
        </p>
      </div>
    </div>

    {/* כרטיס 2 */}
    <div className="solutionCard">
      <div className="solCardTop">
        <div className="solBadge challenge">האתגר בשטח</div>
        <h3 className="solCardHeading">שמירה על טוהר הבחירות</h3>
        <p className="solCardText">מקרים שבהם נציגים בבתי ספר או ברשויות ממונים באופן שרירותי, "מטעם" המערכת, ולא בבחירות דמוקרטיות וחשאיות כנדרש.</p>
      </div>
      <div className="solCardBottom">
        <div className="solBadge action">הפתרון האסטרטגי שלנו</div>
        <p className="solCardContent">
          <strong>שקיפות מלאה והגדרת סטנדרט:</strong> נסייע למועצות ולמנחים לבצע בחירות תקינות ונאמץ חובת דיווח שקופה של פרוטוקול תוצאות רשמי, כדי להבטיח ייצוג אמיתי ואותנטי של הנוער.
        </p>
      </div>
    </div>

    {/* כרטיס 3 */}
    <div className="solutionCard">
      <div className="solCardTop">
        <div className="solBadge challenge">האתגר בשטח</div>
        <h3 className="solCardHeading">חשש מעומס בירוקרטי ודיווח</h3>
        <p className="solCardText">חשש טבעי ומובן של מנחים ונציגים טובים בשטח מפני הצפת שאלונים, משימות דיגיטליות מעייפות וטפסים מרובים שגוזלים זמן עשייה.</p>
      </div>
      <div className="solCardBottom">
        <div className="solBadge action">הפתרון האסטרטגי שלנו</div>
        <p className="solCardContent">
          <strong>מערכות חכמות ותמרוץ יוזמות:</strong> נפשט את תהליכי הדיווח למינימום ההכרחי דרך מערכות נגישות (Monday), ונחבר בין עמידה בסטנדרטים לקבלת תקציבי יוזמות שנתייים וזכויות הגשת מועמדות.
        </p>
      </div>
    </div>

  </div>
</div>

        {/* 5. החזון הרחב – חיבור השפה הארגונית לחוק המועצה בכנסת */}
        <div className="eduSection" style={{ backgroundColor: "rgba(0, 59, 137, 0.02)", padding: "40px 25px", borderRadius: "12px", marginBottom: "60px" }}>
          <h2 className="eduSectionTitle brand-blue" style={{ fontSize: "26px", marginBottom: "15px" }}>
            התשתית לחקיקת "חוק המועצה" בכנסת
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--text)", margin: "0" }}>
            השפה הארגונית אינה עומדת בפני עצמה – היא אבן הראשה של המהלך ההיסטורי הגדול שנוביל בקדנציה הקרובה: <strong>חיקוק מעמד המועצה הארצית בכנסת</strong>. 
            <br /><br />
            כשנגיע לוועדת החינוך של הכנסת כדי להעביר חוק סטטוטורי שיעגן את מעמדנו, תקציבינו ועצמאיותנו בחוקי מדינת ישראל, המשפטנים של משרדי הממשלה וחברי הכנסת ינסו לטעון שהמועצה היא גוף חובבני שאינו מייצג באמת. השפה הארגונית תאפשר לנו להציג להם דאטה קשיחה, אמפירית וחד-משמעית: נראה להם מפת מדינה שבה 100% מהמועצות מבוקרות, עברו בחירות דמוקרטיות וחשאיות, מחזיקות בתקנון חתום ופועלות במקצועיות שיכולה ללמד את המבוגרים שיעור במשילות.
          </p>
        </div>

        {/* 6. מפת הדרכים השנתית וציר ההתנעה (התוכן של רותם) – מוסתר בתוך רכיב מתקפל בתחתית העמוד */}
        <div className="eduSection" style={{ marginBottom: "40px" }}>
          <div className={`orgTimelineToggleCard ${isTimelineOpen ? "orgTimelineToggleOpen" : ""}`}>
            <button
              type="button"
              className="orgTimelineToggleBtn"
              onClick={() => setIsTimelineOpen(!isTimelineOpen)}
            >
              {isTimelineOpen ? "סגור את תוכנית העבודה המלאה וציר שלבי ההתנעה" : "לצפייה בתוכנית העבודה המלאה וציר שלבי ההתנעה המדויק (לחץ לפתיחה)"}
            </button>

            <div className="orgTimelineCollapseWrap">
              <div className="orgTimelineCollapseInner">
                <div className="orgTimelineCollapseContent">
                  
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--text)", marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                    על מנת להבטיח את יישום המודל בשטח, שנת העבודה מחולקת לתחנות עבודה קבועות המשלבות את דרגי המטה והשטח בסנכרון מלא, לצד מעקב נתונים שוטף (ארבעת עוגני מערכת Monday: מדד הכשרת כוח אדם, מדד הטוהר הדמוקרטי, מדד המשילות המקומית ומדד הממשק הפוליטי).
                  </p>

                  <div className="orgTimelineVertical">
                    {timelineSteps.map((step, idx) => (
                      <div className="orgTimeItem" key={idx}>
                        <div className="orgTimeBadge">{step.phase}</div>
                        <div className="orgTimeContent">
                          <div className="orgTimeHeader">
                            <h4 className="orgTimeTitle">{step.title}</h4>
                            <span className="orgTimePeriod">{step.time}</span>
                          </div>
                          <ul className="orgTimelineDetails">
                            {step.details.map((detail, dIdx) => (
                              <li key={dIdx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* כפתור ניווט חזרה */}
      <div className="readMoreContainer">
        <Link to="/plans" className="readMoreButton">
          לכל התוכניות
        </Link>
      </div>
    </div>
  );
}
