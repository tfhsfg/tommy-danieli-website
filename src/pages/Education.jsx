import { useState } from "react";
import { Link } from "react-router-dom";

const problems = [
  "ניהול ריכוזי מדי מהמשרד בירושלים, שלא משאיר למנהלים ולצוותי החינוך מקום לגמישות ולשיקול דעת מקומי.",
  "פערי הישגים גדולים בין מרכז לפריפריה, לצד שחיקה ועזיבה של מורים איכותיים מהמערכת.",
  "תוכניות לימוד שלא מותאמות מספיק למיומנויות המאה ה-21 - מדעים, אנגלית וטכנולוגיה.",
  "מעמד המורה נשחק - שכר, תנאים והכשרה שאינם משקפים את חשיבות התפקיד.",
  "השקעה תקציבית גבוהה שלא מתורגמת לתוצאות מקבילות ביחס למדינות ה-OECD.",
];

const pillars = [
  {
    id: "01",
    title: "אוטונומיה מלאה למנהלי בתי הספר",
    desc: "העברת סמכויות ניהוליות ותקציביות ממשרד החינוך למנהלי בתי הספר, כדי לאפשר קבלת החלטות מהירה ומותאמת לצרכי התלמידים בשטח.",
  },
  {
    id: "02",
    title: "תוכנית לימודים למאה ה-21",
    desc: "דגש מוגבר על מדעים, אנגלית וטכנולוגיה, לצד חיזוק ערכי הציונות והערבות ההדדית כחלק בלתי נפרד מהחינוך הישראלי.",
  },
  {
    id: "03",
    title: "חיזוק מעמד המורה",
    desc: "שיפור שכר, תנאי העבודה וההכשרה המקצועית של המורים, כדי לשמר בתוך המערכת את המורים הטובים ביותר ולהחזיר את היוקרה למקצוע.",
  },
  {
    id: "04",
    title: "מודל תקצוב שקוף לפי תלמיד",
    desc: "מעבר למודל תקצוב הוגן ושקוף שמלווה כל תלמיד ותלמידה, כך שהמשאבים יגיעו למקום שבו הם באמת נדרשים.",
  },
  {
    id: "05",
    title: "פיקוח מוגבר על החינוך הקדם-יסודי",
    desc: "הסדרה ופיקוח הדוקים יותר על מסגרות הגיל הרך, כדי להבטיח סטנדרט אחיד של בטיחות וחינוך לכל הילדים במדינה.",
  },
];

const goals = [
  {
    title: "בתי ספר בצמרת מדדי ההישגים",
    desc: "שיפור עקבי בציוני התלמידים ובמדדי ההישגים הבין-לאומיים.",
  },
  {
    title: "שימור מורים איכותיים",
    desc: "ירידה בשיעור עזיבת המורים את המערכת, לצד עלייה במספר הנרשמים להוראה.",
  },
  {
    title: "פערים מצטמצמים",
    desc: "הצטמצמות פערי ההישגים בין מרכז לפריפריה בכל שכבות הגיל.",
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
          {goals.map((g, i) => (
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
