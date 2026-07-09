import Banner from "../components/Banner";
import "./Partners.css";

// רשימת השותפים המעודכנת והמאוזנת
const partners = [
  {
    name: "פורום מוביל",
    description: "אהיה בקשר רציף ומשותף עם חברי הפורום המוביל, על מנת לקדם מדיניות אחידה, מסונכרנת ומקצועית כפי שיוסכם במזכירות ובמליאה. כיו״ר הוועדה האתית-משפטית, אני רואה בפורום המוביל שותף אסטרטגי להובלת מהלכים רוחביים בארגון, מתוך הבנה שרק עבודה מתואמת בדרגים הגבוהים ביותר תאפשר לנו להעניק גיבוי מלא לשטח ולממש את החזון שלנו בהצלחה.",
    logo: "",
  },
  {
    name: "יושבי ראש הוועדות האחרות",
    description: "הקשר שלי עם עמיתיי, יו”רי הוועדות, הוא קריטי. כיו״ר הוועדה האתית-משפטית, חלק גדול מהתוצאות וההישגים שהנוער פוגש בשטח מיושמים דרך הוועדות האחרות (כמו פרויקטים ואירועים). לכן, שיתוף הפעולה איתם חיוני כדי לוודא שערכי התקינות, האתיקה והגנת הזכויות שזורים בכל עשייה של המזכירות.",
    logo: "",
  },
  {
    name: "מבקר המועצה",
    description: "אני מאמין גדול בביקורת עצמית ובלמידה מתמדת. לאורך השנה אעבוד בשותפות ובשקיפות מלאה מול מבקר המועצה ומבקר הוועדה שימונה. אשמח לשמוע מהם את הנקודות לשימור ולשיפור, ואיערך בהתאם כדי להצעיד את הוועדה קדימה.",
    logo: "",
  },
  {
    name: "מליאת המועצה",
    description: "לבסוף, הקשר שלי עם המליאה – הריבון של הארגון – יתבסס על שקיפות מוחלטת, ייצוגיות ומעורבות גבוהה. אדאג שחברי המליאה יבינו לעומק את תהליכי העבודה המשפטיים והאתיים, יהיו שותפים מלאים לקבלת ההחלטות ויקבלו את כל הכלים اנדרשים להצלחתם.",
    logo: "",
  },
];

export default function Partners() {
  return (
    <section className="partnersPage almoni" dir="rtl">
      <Banner
        image="/images/banner-default.jpg"
        title="שותפים"
      />

      <div className="partnersList">
        {partners.map((partner, i) => (
          <div className="partnerCard" key={i}>
            <div className="partnerLogoSide">
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="partnerLogoImg" />
              ) : (
                <i className="fa-solid fa-handshake partnerLogoPlaceholder"></i>
              )}
            </div>
            <div className="partnerTextSide">
              <h3 className="partnerName">{partner.name}</h3>
              <p className="partnerDesc">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
