import { Link } from "react-router-dom";
import Banner from "../components/Banner";
// שינוי הנתיב כדי לצאת מתיקיית pages אל תיקיית src הראשית
import "./Committee.css";

export default function Committee() {
  return (
    <div className="ethicsPage">
      
      {/* 1. באנר עליון */}
      <Banner
        image="/images/banner-default.jpg"
        title="ועדת אתיקה ומשפט אידיאלית ומודל הניהול"
        description={"הגיע הזמן. עושים תיקון היסטורי -\nבונים מחדש את השותפות והכוח המקצועי של הנציגים בשטח!"}
      />

      {/* 2. שלושת עוגני הפיתוח האישי במבנה פירמידה */}
      <section className="ethSection">
        <h2 className="ethSectionTitle">החזון לוועדה אידיאלית בנוי על שלושה עוגנים</h2>
        <div className="pyramidContainer">
          
          <div className="pyramidTextZone">
            <div className="pyramidRow">
              <div className="pyramidRowTitle">מיומנויות מעשיות למאה ה-21</div>
              <div className="pyramidRowContent">נעניק לחברי הוועדה כלים פרקטיים שילוו אותם גם קדימה – שימוש בטכנולוגיות מתקדמות לניהול משימות, כתיבת חוקים וניסוח חוות דעת משפטיות, הובלת דיונים פורים, טכניקות לגיבוש עמדה מועצתית מורכבת, ולדעת להבדיל בין חוקים חיוניים לסעיפים בירוקרטיים מיותרים בתקנון.</div>
            </div>
            <div className="pyramidRow">
              <div className="pyramidRowTitle">ידע מקצועי</div>
              <div className="pyramidRowContent">נוביל תהליך הכשרה מעמיק על כלל המסמכים המחייבים בארגון. נלמד אותם וננתח אותם יחד, על מנת שחברי הוועדה הינם המומחים הגדולים ביותר למשפט מועצתי.</div>
            </div>
            <div className="pyramidRow">
              <div className="pyramidRowTitle">ערכים</div>
              <div className="pyramidRowContent">נטמיע עבודה מתוך אחריות עמוקה, ממלכתיות וייצוגיות, לצד מחויבות מוחלטת וחיבור בלתי אמצעי לנוער שאנחנו מייצגים בשטח.</div>
            </div>
          </div>

          <div className="pyramidVisualZone">
            <div className="pyrLayer pyr1"><span className="pyrText">מיומנויות מעשיות</span></div>
            <div className="pyrLayer pyr2"><span className="pyrText">ידע מקצועי</span></div>
            <div className="pyrLayer pyr3"><span className="pyrText">ערכים</span></div>
          </div>

        </div>
      </section>

      {/* 3. מבנה פגישות הוועדה בכרטיסים ממוספרים */}
      <section className="ethSection" id="meetings-section" style={{ backgroundColor: "#eaeaea22" }}>
        <h2 className="ethSectionTitle">מבנה פגישות הוועדה: מיישרים קו עם תפוקה ועשייה</h2>
        
        <div className="meetingsGrid">
          <div className="meetCard">
            <span className="meetNum">01</span>
            <h3 className="meetTitle">למידה ופיתוח</h3>
            <p className="meetDesc">פתיחת המפגש ביחידת למידה, העשרה או פיתוח אישי ומקצועי לחברי הוועדה.</p>
            <div className="meetFooter">חלק א'</div>
          </div>
          
          <div className="meetCard">
            <span className="meetNum">02</span>
            <h3 className="meetTitle">מעקב ובקרה</h3>
            <p className="meetDesc">סיכום ההתקדמות מהפגישה הקודמת, הצפת קשיים ומציאת פתרונות מיידיים.</p>
            <div className="meetFooter">חלק ב'</div>
          </div>

          <div className="meetCard">
            <span className="meetNum">03</span>
            <h3 className="meetTitle">אסטרטגיה ותכנון</h3>
            <p className="meetDesc">מעבר על התוכנית השנתית, בחינת היעדים המרכזיים וקביעת מטרות בהתאם לשטח.</p>
            <div className="meetFooter">חלק ג'</div>
          </div>

          <div className="meetCard">
            <span className="meetNum">04</span>
            <h3 className="meetTitle">קבלת החלטות</h3>
            <p className="meetDesc">דיון והצבעה על נושאים עקרוניים ובחירת דרכי הפעולה הברורות להמשך.</p>
            <div className="meetFooter">חלק ד'</div>
          </div>

          <div className="meetCard">
            <span className="meetNum">05</span>
            <h3 className="meetTitle">זמן עבודה</h3>
            <p className="meetDesc">הקצאת זמן ייעודי ומשמעותי לעבודה מעשית בצוותים כדי לצאת מהמפגש עם תוצרים ביד.</p>
            <div className="meetFooter">חלק ה'</div>
          </div>
        </div>
        <p className="meetGridNote">*כל מפגש ועדה שנתי מנוהל במבנה קבוע על מנת לשמור על פוקוס ומכוונות למטרות העל.</p>
      </section>

      {/* 4. תרבות של שותפות ואמון בכרטיסי וי לבנים */}
      <section className="ethSection">
        <h2 className="ethSectionTitle">תרבות של שותפות, אמון ומנהיגות משתפת</h2>
        
        <div className="cardsRowGrid">
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">ביסוס אמון מהרגע הראשון באמצעות שיחות אישיות קבועות ומפגשי גיבוש.</p>
          </div>
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">תוכנית עבודה משותפת הנכתבת יחד בתחילת השנה ומהווה מצפן לעשייה.</p>
          </div>
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">במה ליוזמות נציגים מהשטח בתוך צוותי עבודה גמישים לפתרון בעיות בזמן אמת.</p>
          </div>
          <div className="whiteVeeCard">
            <div className="veeIcon">✓</div>
            <p className="cardBodyText">עבודה צמודה ומסונכרנת עם מזכירות הוועדה (סיו״ר ומזכיר) בפגישות שוטפות.</p>
          </div>
        </div>
      </section>

      {/* 5. ביטול סעיפים ובירוקרטיה בכרטיסי איקס אפרפרים */}
      <section className="ethSection" style={{ backgroundColor: "#ffffff", borderRadius: "8px", margin: "0 8% 40px", padding: "5px 20px 50px" }}>
        <h2 className="ethSectionTitle" style={{ fontSize: "32px", paddingTop: "30px" }}>סעיפים בירוקרטיים מיותרים בתקנון – יבוטלו מיד:</h2>
        
        <div className="cardsRowGrid" style={{ marginBottom: "40px" }}>
          <div className="grayCrossCard">
            <div className="crossIcon">✕</div>
            <p className="cardBodyText">ביטול סעיפים בירוקרטיים מעכבים ומיושנים בתקנון הארגון</p>
          </div>
          <div className="grayCrossCard">
            <div className="crossIcon">✕</div>
            <p className="cardBodyText">עצירת תהליכי קבלת החלטות חד-צדדיים ללא שיתוף מליאת הוועדה</p>
          </div>
          <div className="grayCrossCard">
            <div className="crossIcon">✕</div>
            <p className="cardBodyText">מניעת נתק וחוסר סנכרון בין הנציגים בארצי לצרכי השטח במחוזות</p>
          </div>
          <div className="grayCrossCard">
            <div className="crossIcon">✕</div>
            <p className="cardBodyText">ביטול חוסר האחידות המקצועי בין חברי הוועדה השונים</p>
          </div>
        </div>

        <button type="button" className="bennettBtn">אני רוצה לשמוע עוד</button>
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