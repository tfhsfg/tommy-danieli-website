import Banner from "../components/Banner";
import "./Partners.css";

// רשימת השותפים - יש לעדכן כל שורה עם השם, התיאור והלוגו (בנתיב public/images) של השותף האמיתי
const partners = [
  {
    name: "שם השותף הראשון",
    description: "תיאור מלא ומפורט של השותף, של הרקע להקמתו ושל הדרך שבה הוא פועל בשטח. יש לתאר כאן את אופי השיתוף עם הקמפיין, את הפעילויות המשותפות ואת הערך המוסף שהשותפות הזו מביאה לנוער ולמועצות. אפשר להרחיב על פני כמה משפטים, כי זהו תיאור פסקתי ולא כותרת קצרה.",
    logo: "",
  },
  {
    name: "שם השותף השני",
    description: "תיאור מלא ומפורט של השותף, של הרקע להקמתו ושל הדרך שבה הוא פועל בשטח. יש לתאר כאן את אופי השיתוף עם הקמפיין, את הפעילויות המשותפות ואת הערך המוסף שהשותפות הזו מביאה לנוער ולמועצות. אפשר להרחיב על פני כמה משפטים, כי זהו תיאור פסקתי ולא כותרת קצרה.",
    logo: "",
  },
  {
    name: "שם השותף השלישי",
    description: "תיאור מלא ומפורט של השותף, של הרקע להקמתו ושל הדרך שבה הוא פועל בשטח. יש לתאר כאן את אופי השיתוף עם הקמפיין, את הפעילויות המשותפות ואת הערך המוסף שהשותפות הזו מביאה לנוער ולמועצות. אפשר להרחיב על פני כמה משפטים, כי זהו תיאור פסקתי ולא כותרת קצרה.",
    logo: "",
  },
];

export default function Partners() {
  return (
    <section className="partnersPage almoni" dir="rtl">
      <Banner
        image="/images/banner-default.jpg"
        title="שותפים"
        description={"יחד נצליח לשנות את המערכת -\nהכירו את הגורמים והשותפים שמובילים איתי את הדרך."}
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
