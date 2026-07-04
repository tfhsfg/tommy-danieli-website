import { useState } from "react";
import { Link } from "react-router-dom";

const problems = [
  "הפער בין הכיתה לעולם האמיתי רק גדל. מערכת החינוך הנוכחית מתעקשת לפעול בשיטות מיושנות של המאה ה-19, בעוד הנוער נאלץ להתמודד לבדו עם אתגרי המאה ה-21.",
  "מערכת החינוך הפכה למסורבלת, מקובעת ונוקשה. שינון חומר עיוור ומעבר מבחנים סטנדרטיים מחליפים למידה אמיתית. התוצאה היא שחיקה, תסכול עמוק ואיבוד עניין של התלמידים מיד עם הגשת המבחן.",
  "משרד החינוך הריכוזי מכתיב הכל משרשרת פיקוד מרוחקת בירושלים. המערכת פועלת בשיטת \"מידה אחת מתאימה לכולם\", מתעלמת מסגנונות למידה שונים ומגלה חוסר גמישות קיצוני ובירוקרטיה דווקא ברגעים בהם התלמידים זקוקים להגנה, התאמות ותמיכה פדגוגית ברצף הלימודי המשתנה בזמני משבר וחירום.",
  "חלק גדול מילדי ישראל מסיימים 12 שנות לימוד ללא ארגז כלים בסיסי לחיים הבוגרים. הם יוצאים אל העולם ללא מיומנויות למידה עצמאית, וחשופים למניפולציות ופייק ניוז ברשתות החברתיות ללא מסננת ביקורתית וללא כלים לניהול שיח אזרחי מכבד.",
];

const pillars = [
  {
    id: "01",
    title: "תוכנית היערכות ואכיפת הקלות חירום",
    desc: "בניית מנגנון הגנה פדגוגי גמיש ומותאם אישית בזמני משבר. נעבור למודל המאפשר לתלמיד לבחור את דרך צריכת החומר שלו – בין אם בטקסט, בפודקאסט או במדיה חזותית – כדי למנוע פערים לימודיים בחירום.",
  },
  {
    id: "02",
    title: "קידום שיעורי אוריינות מדיה ושיח אזרחי",
    desc: "נכניס ארגז כלים מעשי לעולם האמיתי בתוך מערכת השעות: נשלב תכני אוריינות מדיה וחשיבה ביקורתית להתמודדות עם פייק ניוז, ונקדם חינוך פוליטי ואזרחי אקטיבי לניהול שיח דמוקרטי ומכבד.",
  },
  {
    id: "03",
    title: "מהפכת אירועי ההערכה – משינון לחשיבה",
    desc: "נממש את מסקנות ועדת שפירא ונרחיב את תוכנית 720 כדי להעניק אוטונומיה פדגוגית אמיתית לבתי הספר ולעבור להערכה חלופית, יצירתית ורב-ממדית במקום מרוץ הבגרויות המתיש והיבש.",
  },
];

const precentage = [
  {
    title: "42%",
    desc: "כמעט אחד מכל שני תלמידים (42%) המושפעים ממצבי חירום ביטחוניים או מתמשכים מדווח על פערים חמורים ביישום ההקלות הפדגוגיות שמגיעות לו (מקור: מחקר לאומי \"רואים את הנוער 2026\").",
  },
  {
    title: "46%",
    desc: "בזמן ש-80.8% מהנוער דורשים שקולם ישפיע על החלטות הנוגעות לחייהם, רק 34.4% מרגישים שדעתם נשאלת בפועל על ידי המערכת (מקור: מחקר לאומי \"רואים את הנוער 2026\").",
  },
  {
    title: "+150%",
    desc: "יותר מבחנים שתלמיד ישראלי ממוצע ניגש לעומת שאר התלמידים במדינות הOECD.",
  },
];

const goals = [
  {
    title: "01 | ביטול מרוץ השינון ומעבר מלא להערכה חלופית",
    desc: "ניפרד ממודל הבגרויות המיושן שמבוסס על שינון עיוור של חומר. נוביל תהליך עומק מול משרד החינוך ליישום מלא של מסקנות ועדת שפירא והרחבת תוכנית 720. נעבור משינון חומר ללמידה דינמית, חוקרת וגמישה, שבה הציון משקף עבודה אמיתית, יצירתיות וחשיבה – ולא רק זיכרון לטווח קצר.",
  },
  {
    title: "02 | ארגז כלים לעולם האמיתי ושיח אזרחי",
    desc: "לא נצא ממערכת החינוך בלי לדעת איך להתמודד עם החיים הבוגרים ועם זירות המידע הדיגיטליות. נטמיע באופן מלא את התוכנית לחינוך אזרחי ופוליטי אקטיבי למערכת השעות כדי להקנות כלים לניהול שיח דמוקרטי, פתוח ומכבד.",
  },
  {
    title: "03 | חסינות דיגיטלית נגד פייק ניוז ואוריינות מדיה",
    desc: "בעידן של רשתות חברתיות מהירות, הנוער חשוף מדי יום למניפולציות, שקרים והסתה. נכניס תכני אוריינות מדיה וחשיבה ביקורתית כחלק מובנה ממערכת השעות הקבועה. נדאג שהתלמידים והמורים בשטח יהיו שותפים מלאים ופעילים בעיצוב הכלים האלו, כדי להעניק לנו מסננת ביקורתית חדה מול המסכים.",
  },
];

const faqs = [
  {
    q: "מה המשמעות של אוטונומיה למנהלי בתי הספר?",
    a: "מנהלים יקבלו סמכות רחבה יותר על תקציב בית הספר, גיוס והכשרת צוות, ותכנון תוכניות לימוד משלימות - בכפוף לסטנדרטים לאומיים אחידים.",
  },
  {
    q: "איך התוכנית משפיעה על שכר המורים?",
    a: "התוכנית שואפת להעלות את שכר המורים ולשפר את תנאי העבודה שלהם, כחלק ממאמץ להחזיר את מעמד המקצוע ולעודד אנשי חינוך מובילים להישאר במערכת.",
  },
  {
    q: "מה קורה עם תוכנית הלימודים הקיימת?",
    a: "התוכנית הקיימת תתעדכן כך שתשקף דגש חזק יותר על מדעים, אנגלית וטכנולוגיה, לצד המשך חיזוק ערכי הציונות והערבות ההדדית.",
  },
  {
    q: "איך זה משפיע על בתי ספר בפריפריה?",
    a: "מודל התקצוב לפי תלמיד נועד להבטיח שמשאבים נוספים יגיעו בדיוק לאזורים ולאוכלוסיות שבהם הצורך גדול יותר, כדי לצמצם פערים.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`eduFaqItem${open ? " eduFaqItemOpen" : ""}`}>
      <button
        type="button"
        className="eduFaqSummary"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{q}</span>
        <i className="fa-solid fa-chevron-down eduFaqChevron"></i>
      </button>
      <div className="eduFaqAnswerWrap">
        <div className="eduFaqAnswerInner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section className="eduPage almoni">
      <div className="eduTopImages">
        <div className="eduTopImageLarge">
          <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`https://fastly.picsum.photos/id/336/1000/600.jpg?hmac=lT6Ac0boYjztwD03xvbfl-ekNYSXh-d78c0XX9s9YAE`} draggable={false} alt="תוכנית מערכת החינוך" />
        </div>
        <div className="eduTopImageSmall">
          <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`https://fastly.picsum.photos/id/17/1000/200.jpg?hmac=NN8eOku060bz_6uZiti477rN0VXwGMr3aMwTPpaCV2I`} draggable={false} alt="תוכנית מערכת החינוך" />
        </div>
      </div>

      <div className="eduHero">
        <h1 className="brand-blue">התוכנית למערכת החינוך</h1>
        <p className="subtitle">חינוך איכותי ושוויוני לכל ילד וילדה בישראל</p>
        <hr style={{ border: "none", borderTop: "1px solid rgb(0, 59, 137)", margin: "20px 0" }}></hr>
        <br></br>
      </div>

      <div className="eduSection eduProblemSolutionGrid">
        <div className="eduProblemSolutionCol">
          <h2 className="eduSectionTitle brand-blue">מה הבעיה?</h2>
          <ul className="eduProblemList">
            {problems.map((item, i) => (
              <li className="eduProblemItem" key={i}>
                <i className="fa-solid fa-circle-exclamation eduProblemIcon"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="eduProblemSolutionCol">
          <h2 className="eduSectionTitle brand-blue">מה הפתרון?</h2>
          <div className="eduPillars">
            {pillars.map((p) => (
              <div className="eduPillarCard" key={p.id}>
                <span className="eduPillarNumber">{p.id}</span>
                <div>
                  <h3 className="eduPillarTitle">{p.title}</h3>
                  <p className="eduPillarDesc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="eduSection precentageSection">
        <div className="eduGoalsGrid">
          {precentage.map((g, i) => (
            <div className="eduGoalCard" key={i}>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="eduSection eduSuccessSection">
        <h2 className="eduGoalsTitle">איך נדע שהצלחנו</h2>
        <div className="eduGoalsList">
          {goals.map((g, i) => (
            <div className="eduGoalItem" key={i}>
              <i className="fa-solid fa-check eduGoalCheck"></i>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="eduSection">
        <h2 className="eduSectionTitle brand-blue">שאלות ותשובות</h2>
        <div className="eduFaq">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>

      <div className="readMoreContainer">
        <Link to="/plans" className="readMoreButton">
          לכל התוכניות
        </Link>
      </div>
    </section>
  );
}
