import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./OrganizationalLanguage.css";

// 1. נתוני ציר הזמן - 5 תחנות מפורטות
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
      "אוקטובר: סיום תהליך הקמת הכיתות ובחירות דמוקרטיות, חשאיות ותקינות לכלל המועצות הבית-ספריות.",
      "נובמבר: סיום מבצע הבחירות הרשמי ברמת הרשויות והקמת הנציגויות המחוזיות החדשות. בלי קיצורי דרך ובלי מינויים מקורבים."
    ]
  },
  {
    phase: "תחנה 3",
    title: "מעקב, סנכרון וישיבות סטטוס",
    time: "דצמבר – ינואר",
    details: [
      "קיום סמינרי חנוכה ממוקדים ופורום יו״רים/סיו״רים מחוזי וארצי לסנכרון שורות.",
      "הערכות מוקדמת לקראת דוחות הביקורת והצפת חסמים מהשטח.",
      "קיום ישיבות סטטוס הדוקות: ברמת בית הספר (מול רכזי החח״ק) וברמת הרשות (מול מנהלי מחלקות הנוער למועצות הרשותיות)."
    ]
  },
  {
    phase: "תחנה 4",
    title: "ועדות אכיפה מחוזיות בשטח",
    time: "מרץ",
    details: [
      "הקמת 'סיירת ביקורת' מחוזית מובנית: מפקח רשותי, רפרנט מנהיגות, נציג המועצה המחוזית ובוגר/ת המועצה.",
      "הוועדה מגיעה פיזית אל הרשויות המקומיות, שם מוצגת פעילות המועצה והעבודה בפועל על פי דרישות השפה הארגונית."
    ]
  },
  {
    phase: "תחנה 5",
    title: "יישום, הערכה והוקרה",
    time: "אפריל – יוני",
    details: [
      "אפריל - מאי: יישום בפועל של תוצאות ותובנות הוועדה המחוזית, תיקון ליקויים בשטח והפעלת סנקציות ארגוניות במידת הצורך.",
      "מאי - יוני: קיום אירועי הוקרה והערכה רשמיים ברמת הרשות או המחוז למועצות שהפגינו מצוינות והטמעה מלאה של המודל."
    ]
  }
];

// 2. נתוני אתגרים ופתרונות
const challenges = [
  {
    icon: "fa-solid fa-dumpster-fire",
    title: "תרבות ה׳יהיה בסדר׳ והשכונה",
    desc: "מנחים ורכזים ותיקים ברשויות שלא מעוניינים בפיקוח, מתנגדים להכתבת כללים מהדרג הארצי, ומעדיפים להמשיך לפעול ללא סדר ותיעוד.",
    solution: "הפיכת השפה הארגונית למחייבת פדגוגית. מועצה שלא תעבוד לפי הכללים פשוט לא תוכר כנציגות רשמית, ומכתבי דרישה יישלחו ישירות למנהלי אגפי החינוך ברשויות."
  },
  {
    icon: "fa-solid fa-user-ninja",
    title: "זיוף נתונים פוליטי בשטח",
    desc: "דיווחים פיקטיביים של רשויות על קיום 'בחירות חשאיות' בזמן שבפועל המנחה המקומי פשוט מינה באופן שרירותי את התלמיד שהוא הכי אוהב.",
    solution: "הצלבת נתונים קשיחה מול ועדת הבחירות. דרישה להצגת פרוטוקול בחירות חתום ושמות חברי ועדת הבחירות בשאלון ה-MONDAY, בתוספת פשיטות פתע של הוועדה המחוזית במרץ."
  },
  {
    icon: "fa-solid fa-hourglass-slash",
    title: "עייפות דיווח וטענות בירוקרטיה",
    desc: "טענות חוזרות מצד מנחים על עומס בירוקרטי בשל הצורך למלא שאלונים דיגיטליים, המשמשות לעיתים קרובות כתירוץ לאי-סדר ארגוני.",
    solution: "התניית תקציבים וזכויות פוליטיות. רשות או מחוז שלא יזינו נתונים מלאים במערכת, נציגיהם לא יוכלו להגיש מועמדות לתפקידים בארצי, והרשות לא תקבל תקציבי יוזמות שנתיים."
  }
];

// 3. מדדי Monday (באנר הצלחה)
const mondayMetrics = [
  {
    title: "מדד הכשרת כוח האדם",
    desc: "מיפוי ותק המנחה ובדיקת קיומה של תעודת הכשרה רשמית (60 או 120 שעות מחח״ן). אכיפת חובה של מינימום 10 שעות הכשרה שנתיות לכל נציג מועצה בנושאי תקנון ואתיקה."
  },
  {
    title: "מדד הטוהר הדמוקרטי",
    desc: "חובת הזנת תאריך מדויק של קיום הבחירות, דיווח שמות חברי ועדת הבחירות המקומית, פרסום ספר בוחרים וניהול פרוטוקול תוצאות רשמי, חשוף וחתום."
  },
  {
    title: "מדד המשילות המקומית",
    desc: "סטטוס כתיבה ואישור של תקנון מקומי התואם את תקנון העל הארצי, ומינוי חובה של שלושת תפקידי המפתח הסטטוטוריים: יו״ר, סיו״ר ומבקר מועצה."
  },
  {
    title: "מדד הממשק הפוליטי",
    desc: "מיפוי וספירה של מפגשים ודיונים סדירים ורשמיים של נציגי המועצה עם מקבלי ההחלטות הבכירים ברשות (ראש העיר, מנכ״ל הרשות, מנהל אגף החינוך)."
  }
];

// 4. נתוני שאלות ותשובות (FAQ)
const faqData = [
  {
    question: "למה הפיקוח והמחוזות צריכים את השאלון והמעקב ב-MONDAY?",
    answer: "כי ידע הוא כוח פוליטי ומבצעי. כשאנחנו יודעים בזמן אמת מהו ותק המנחה בשטח, מתי אושר התקנון לאחרונה וכמה שעות הכשרה הנציגים קיבלו, אנחנו מסוגלים למפות חולשות ארגוניות, למנוע קריסה של מועצות מקומיות, ולהציג חזית מקצועית חסינת ערעור מול משרד החינוך ומקבלי ההחלטות."
  },
  {
    question: "מה קורה אם רשות או בית ספר מסרבים ליישם את המודל או מדווחים נתונים פיקטיביים?",
    answer: "כאן נכנסת הוועדה המחוזית (סיירת הביקורת) לפעולה בחודש מרץ. רשות שלא תעמוד בסטנדרטים של השפה הארגונית ולא תציג פרוטוקולים אמיתיים של בחירות חשאיות, תאבד את הלגיטימציה שלה: נציגיה לא יוכרו בדרגים הגבוהים (מחוז וארצי), והיא תיחסם מקבלת תקציבי יוזמות שנתיים באפריל-מאי."
  },
  {
    question: "איך הטמעת השפה הארגונית קשורה ישירות לפתיחת ״תקנון העל״ הארצי?",
    answer: "אי אפשר לכתוב חוקה חדשה לשטח שלא מסוגל לציית לחוקים הקיימים. השפה הארגונית מיישרת קו ויוצרת 'מכינה חוקתית' – היא מוודאת שכל נציג מבין מושגים כמו קוורום, דוח מבקר וועדת אתיקה. ברגע שהתשתית הזו מוטמעת, כל תיקון חוקתי שנבצע בתקנון העל יחלחל למטה מיד ובאופן אורגני."
  },
  {
    question: "כיצד המודל הזה מסייע לנו לקדם את חקיקת ״חוק המועצה הארצית״ בכנסת?",
    answer: "בוועדות הכנסת, הטענה הראשונה של פקידי הממשל וחברי הכנסת נגדנו תהיה חוסר מייצגות או חובבנות בשטח. השפה הארגונית היא תעודת הכשרות המשפטית שלנו. באמצעות הדאטה הקשיחה מה-Monday, נוכל להוכיח לחברי הכנסת ש-100% מהמועצות בארץ נבחרות באופן דמוקרטי, חשאי ומבוקר, מה שיסיר כל עילה משפטית להתנגד לחוק הסטטוטורי שלנו."
  }
];

export default function OrganizationalLanguage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [timelineOpen, setTimelineOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="orgLanguagePage">
      <Banner 
        title="הטמעת השפה הארגונית" 
        subtitle="מודל משילות, בקרה וכוח פוליטי לשנות תשפ״ו – תשפ״ז" 
      />

      {/* חלק 1: מבוא חזון ורציונל */}
      <div className="eduSection orgIntroSection">
        <h2 className="eduSectionTitle brand-blue">הרפורמה המבנית הגדולה</h2>
        <p className="eduSectionDesc">
          מועצת התלמידים והנוער בישראל אינה ״ועדת קישוט״ שפועלת מכוח האינרציה; היא הפרלמנט הסטטוטורי הנבחר והמייצג של מאות אלפי בני נוער במדינת ישראל. עם זאת, כוח פוליטי ויכולת השפעה אמיתית מול משרדי הממשלה והשלטון המקומי מחייבים משמעת ארגונית אחידה.
        </p>
        <blockquote className="orgStrategicQuote">
          <strong>השפה הארגונית היא חוקת העבודה שלנו.</strong> היא קוד ההפעלה המחייב והמסונכרן שמגדיר מהי מועצה חוקית ומתפקדת, ומבהיר לשטח דבר אחד פשוט: עידן השכונה במועצות הנוער נגמר. יש סטנדרט אחיד למשילות דמוקרטית.
        </blockquote>
      </div>

      {/* חלק 3: כרטיסיות קרב - אתגרים ופתרונות */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">החסמים בשטח והמענה האסטרטגי</h2>
        <p className="eduSectionDesc text-center">הטמעת משילות תמיד תיתקל בהתנגדות. כך נפרק את מוקדי הכוח שמסרבים ליישר קו:</p>
        
        <div className="orgChallengesGrid">
          {challenges.map((item, index) => (
            <div className="orgChallengeCard" key={index}>
              <div className="orgChallengeTop">
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
              </div>
              <div className="orgChallengeBody">
                <div className="orgChallengeBlock problem">
                  <strong>האתגר:</strong> {item.desc}
                </div>
                <div className="orgChallengeBlock solution">
                  <strong>הפתרון האסטרטגי:</strong> {item.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* חלק 4: מדדי הצלחה (באנר Monday מלא) */}
      <div className="eduSection eduSuccessSection">
        <h2 className="eduGoalsTitle">מטריצת המיפוי ומדדי ההצלחה (מערכת MONDAY)</h2>
        <p className="orgGoalsSubtitle">
          המעקב והאכיפה מבוצעים באמצעות דאטה קשיחה ואיסוף סטטוסים דיגיטלי בזמן אמת. אנחנו לא מנחשים – אנחנו ממפים 4 עוגנים מוגדרים:
        </p>
        <div className="orgMondayGrid">
          {mondayMetrics.map((metric, i) => (
            <div className="orgMondayCard" key={i}>
              <div className="orgMondayNumber">0{i + 1}</div>
              <h3>{metric.title}</h3>
              <p>{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* חלק 5: החזון הפוליטי הרחב - תקנון העל והכנסת */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">היעד הפוליטי העליון: הגביע הקדוש של הקדנציה</h2>
        <p className="eduSectionDesc text-center">
          השפה הארגונית אינה עומדת בפני עצמה – היא אבן הראשה של שני המהלכים ההיסטוריים הגדולים ביותר של הוועדה האתית-משפטית:
        </p>
        
        <div className="orgBigVisionGrid">
          <div className="orgVisionCard">
            <div className="orgVisionIcon"><i className="fa-solid fa-gavel"></i></div>
            <h3>1. הזיקה המיידית לפתיחת ״תקנון העל״ הארצי</h3>
            <p>
              פתיחת תקנון העל וכתיבתו מחדש היא המהלך החוקתי הרחב ביותר שלנו, אך חוקים חדשים אינם שווים דבר אם לשטח אין את התרבות הארגונית לציית להם.
            </p>
            <p className="orgVisionHighlight">
              <strong>השפה הארגונית משמשת כמכינה חוקתית:</strong> היא מכשירה את השטח להבין מושגים משפטיים מורכבים (קוורום, דוח מבקר) כך שכל שינוי שנכניס בתקנון העל יחלחל ויבוצע בשטח באופן מיידי ואורגני, ללא פערי הבנה.
            </p>
          </div>

          <div className="orgVisionCard">
            <div className="orgVisionIcon"><i className="fa-solid fa-building-columns"></i></div>
            <h3>2. התשתית לחקיקת ״חוק המועצות״ בכנסת</h3>
            <p>
              היעד העליון הוא העברת חוק סטטוטורי בכנסת המעגן את מעמדה, תקציביה ועצמאותה של המועצה הארצית בחוקי המדינה, ללא תלות בחסדים של פקידים.
            </p>
            <p className="orgVisionHighlight">
              <strong>הדאטה ככלי נשק פוליטי בוועדות הכנסת:</strong> כשינסו לטעון שאנחנו גוף חובבני, נציג נתונים אמפיריים חותכים: 100% מהמועצות מבוקרות ב-Monday, עברו בחירות חשאיות ופועלות תחת מנחים מוסמכים. השפה הארגונית מסירה כל עילה חוקית להתנגדות לחוק!
            </p>
          </div>
        </div>
      </div>

      {/* חלק 5.5: מפת הדרכים השנתית - מוסתרת מאחורי כפתור כחול יחיד */}
      <div className="eduSection">
        <button
          type="button"
          className="orgTimelineToggleBtn"
          onClick={() => setTimelineOpen((prev) => !prev)}
          aria-expanded={timelineOpen}
        >
          <span>מפת הדרכים השנתית ושלבי ההתנעה</span>
          <span className="orgTimelineToggleIcon">{timelineOpen ? "−" : "+"}</span>
        </button>

        <div className={`orgTimelineCollapseWrap${timelineOpen ? " orgTimelineCollapseOpen" : ""}`}>
          <div className="orgTimelineCollapseInner">
            <p className="eduSectionDesc text-center">לוח זמנים קשיח ותחנות עבודה ברורות המשלבות את דרגי המטה, המחוז והשטח:</p>

            <div className="orgTimelineVertical">
              {timelineSteps.map((step, index) => (
                <div className="orgTimelineItem" key={index}>
                  <div className="orgTimelineBadge">
                    <span>{step.phase}</span>
                  </div>
                  <div className="orgTimelineContent">
                    <div className="orgTimelineHeader">
                      <h3>{step.title}</h3>
                      <span className="orgTimelineTime">{step.time}</span>
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

      {/* חלק 6: שאלות ותשובות (אקורדיון FAQ) */}
      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">שאלות ותשובות על המודל והאכיפה</h2>
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

      {/* כפתור ניווט חזרה */}
      <div className="readMoreContainer">
        <Link to="/plans" className="readMoreButton">
          לכל התוכניות המנהיגותיות
        </Link>
      </div>
    </div>
  );
}
