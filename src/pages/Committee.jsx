import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "./Committee.css";

export default function Committee() {
  return (
    <div className="ethicsPage">
      
      {/* 1. באנר עליון – ממוקד שותפות ותיקון */}
      <Banner
        image="/images/antoine-gravier-KhlmmD0ivN0-unsplash.jpg"
        title="הוועדה האתית-משפטית"
      />

      {/* 2. הקפצת תרבות השותפות והאמון לראש העמוד (מענה ישיר לשטח) */}
      <section className="ethSection">
        <h2 className="ethSectionTitle">תרבות של שותפות, אמון ומנהיגות משתפת</h2>
        <p className="ethSectionDesc" style={{ textAlign: "center", maxWidth: "800px", margin: "-10px auto 30px", fontSize: "16px", lineHeight: "1.6" }}>
          המנהיגות שלנו שואבת את כוחה מהשטח. הדלת של הוועדה הארצית תהיה פתוחה לחלוטין לכל מחוז ולכל רשות, כדי לוודא שאתם מקבלים את המענה המקצועי והגיבוי הראוי לכם.
        </p>
        
        <div className="cardsRowGrid">
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">ביסוס אמון הדדי מהרגע הראשון באמצעות שיחות אישיות קבועות ומפגשי גיבוש שוטפים עם נציגי המחוזות.</p>
          </div>
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">תוכנית עבודה משותפת הנכתבת ומעוצבת יחד איתכם בתחילת השנה ומהווה מצפן אמיתי לעשייה.</p>
          </div>
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">מתן במה מלאה ליוזמות נציגים מהשטח ובניית תרבות ארגונית ששמה את פתרון בעיות הנציגים במרכז.</p>
          </div>
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">עבודה צמודה, שקופה ומסונכרנת עם מזכירות הוועדה (סיו״ר ומזכיר) בפגישות עבודה שוטפות.</p>
          </div>
        </div>
      </section>

      {/* 3. שכתוב המבוא והעוגנים – מתוכן תיאורטי לתוצרים מעשיים */}
      <section className="ethSection" style={{ backgroundColor: "#eaeaea11", padding: "40px 20px", borderRadius: "12px" }}>
        <h2 className="ethSectionTitle">ועדה של פרויקטים ומדיניות</h2>
        <div className="pyramidContainer">
          
          <div className="pyramidTextZone">
            <div className="pyramidRow">
              <div className="pyramidRowTitle">כלים ופרויקטים מעשיים</div>
              <div className="pyramidRowContent">
                הוועדה האתית-משפטית בראשותי לא תהיה ועדה של דיונים מנותקים או בירוקרטיה מעייפת – היא הופכת למנוע של פרויקטים ומדיניות עבור השטח כולו. נעניק לחברי הוועדה כלים פרקטיים שיובילו להפקת תוצרים שישרתו את כל גלגלי הנציגות.
              </div>
            </div>
            <div className="pyramidRow">
              <div className="pyramidRowTitle">ידע מקצועי מונגש</div>
              <div className="pyramidRowContent">
                נוביל תהליך למידה משותף על כלל המסמכים המחייבים בארגון, מתוך מטרה להנגיש אותם לשטח בגובה העיניים. חברי הוועדה יהיו המומחים המקצועיים שיעניקו לכם הגנה משפטית, סמכויות ברורות וגב מלא מול המערכת.
              </div>
            </div>
            <div className="pyramidRow">
              <div className="pyramidRowTitle">ערכים וחיבור בלתי אמצעי</div>
              <div className="pyramidRowContent">
                נטמיע תרבות עבודה מתוך אחריות עמוקה, ממלכתיות וייצוגיות, לצד מחויבות מוחלטת לשמירה על זכויות הנוער והתלמידים שאנחנו מייצגים יום-יום בשטח ובמוסדות המדינה.
              </div>
            </div>
          </div>

          <div className="pyramidVisualZone">
            <div className="pyrLayer pyr1"><span className="pyrText">כלים מעשיים</span></div>
            <div className="pyrLayer pyr2"><span className="pyrText">ידע מונגש</span></div>
            <div className="pyrLayer pyr3"><span className="pyrText">ערכים וחיבור</span></div>
          </div>

        </div>
      </section>

      {/* 4. מבנה הפגישות – עשייה ותפוקה לשטח */}
      <section className="ethSection" id="meetings-section" style={{ backgroundColor: "#eaeaea22" }}>
        <h2 className="ethSectionTitle">מבנה הפגישות</h2>
        
        <div className="meetingsGrid">
          <div className="meetCard">
            <span className="meetNum">01</span>
            <h3 className="meetTitle">הכשרה והעשרה</h3>
            <p className="meetDesc">פתיחת המפגש ביחידת למידה יישומית, הקניית כלים מעשיים ופיתוח מקצועי לחברי הוועדה.</p>
            <div className="meetFooter">חלק א'</div>
          </div>
          
          <div className="meetCard">
            <span className="meetNum">02</span>
            <h3 className="meetTitle">אתגרים מהשטח</h3>
            <p className="meetDesc">הצפת קשיים שעולים מהמחוזות והרשויות ומציאת מענה אסטרטגי ופתרונות מיידיים עבורם.</p>
            <div className="meetFooter">חלק ב'</div>
          </div>

          <div className="meetCard">
            <span className="meetNum">03</span>
            <h3 className="meetTitle">אסטרטגיה ותכנון</h3>
            <p className="meetDesc">מעבר על התוכנית השנתית המשותפת, בחינת יעדי העל וקביעת מטרות בהתאם לצרכי הנציגים.</p>
            <div className="meetFooter">חלק ג'</div>
          </div>

          <div className="meetCard">
            <span className="meetNum">04</span>
            <h3 className="meetTitle">קבלת החלטות</h3>
            <p className="meetDesc">דיון פתוח והצבעה דמוקרטית במליאת הוועדה על נושאים עקרוניים ובחירת דרכי הפעולה להמשך.</p>
            <div className="meetFooter">חלק ד'</div>
          </div>

          <div className="meetCard">
            <span className="meetNum">05</span>
            <h3 className="meetTitle">צוותי משימה ותוצרים</h3>
            <p className="meetDesc">הקצאת זמן ייעודי ומשמעותי לעבודה מעשית בצוותים כדי לצאת מכל מפגש עם תוצרים וכלים מוכנים לשטח.</p>
            <div className="meetFooter">חלק ה'</div>
          </div>
        </div>
        <p className="meetGridNote">*כל מפגש ועדה שנתי מנוהל במבנה קבוע על מנת לשמור על פוקוס ומכוונות למטרות העל של הנציגות.</p>
      </section>

      {/* 5. החלפת כרטיסי האיקס השליליים בתוכנית חיובית של אפיון צרכים וצוותי משימה */}
      <section className="ethSection" style={{ backgroundColor: "#ffffff", borderRadius: "8px", margin: "0 8% 40px", padding: "5px 20px 50px" }}>
        <h2 className="ethSectionTitle" style={{ fontSize: "28px", paddingTop: "30px" }}>מרחיבים את הפעילות</h2>
        <p style={{ textAlign: "center", maxWidth: "750px", margin: "-10px auto 30px", fontSize: "15.5px", lineHeight: "1.65", color: "var(--text)" }}>
          אנחנו לא נכתיב פתרונות מלמעלה ולא נרצה לייצר תוכניות מגירה מנותקות. העבודה שלנו השנה תתבסס על שותפות מלאה ובנייה משותפת של המענה האתי-משפטי הנכון ביותר עבורכם.
        </p>
        
        <div className="cardsRowGrid" style={{ marginBottom: "40px" }}>
          <div className="grayCrossCard" style={{ borderColor: "rgba(0, 59, 137, 0.15)" }}>
            <div className="crossIcon" style={{ color: "var(--primary)" }}>✓</div>
            <p className="cardBodyText"><strong>אפיון צרכים משותף:</strong> נאפיין יחד איתכם את ארבעת הצרכים הדחופים ביותר של הנציגים בשטח בתחום האתי-משפטי.</p>
          </div>
          <div className="grayCrossCard" style={{ borderColor: "rgba(0, 59, 137, 0.15)" }}>
            <div className="crossIcon" style={{ color: "var(--primary)" }}>✓</div>
            <p className="cardBodyText"><strong>הקמת צוותי משימה:</strong> נפתח צוותי עבודה ייעודיים שיובילו פרויקטים משמעותיים ונגישים לחיזוק כל גלגלי הנציגות.</p>
          </div>
          <div className="grayCrossCard" style={{ borderColor: "rgba(0, 59, 137, 0.15)" }}>
            <div className="crossIcon" style={{ color: "var(--primary)" }}>✓</div>
            <p className="cardBodyText"><strong>הנגשת זכויות מעשית:</strong> נתרגם מסמכים ותקנונים מורכבים למדריכים ברורים ובגובה העיניים עבור כל תלמיד ונציג.</p>
          </div>
          <div className="grayCrossCard" style={{ borderColor: "rgba(0, 59, 137, 0.15)" }}>
            <div className="crossIcon" style={{ color: "var(--primary)" }}>✓</div>
            <p className="cardBodyText"><strong>גיבוי מקצועי מלא:</strong> ניצור רשת ביטחון וייעוץ זמינה שתעניק גב וכלים לנציגים ברשויות ובבתי הספר מול אתגרי המערכת.</p>
          </div>
        </div>

      </section>

      {/* כפתור ניווט תחתון לחזרה */}
      <div className="readMoreContainer">
        <Link to="/plans" className="readMoreButton">
          לכל התוכניות
        </Link>
      </div>

    </div>
  );
}
