import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./AboutMe.css";

const milestones = [
  {
    id: 1,
    year: "כיתה ז׳",
    title: "פרוייקט ה-30 אלף",
    images: [
      "/images/project30k_1.jpg",
      "/images/project30k_2.jpg",
      "/images/project30k_3.jpg"
    ],
    details: `### התפקיד והשטח
הגעתי לחטיבה ונבחרתי לייצג את הכיתה שלי במועצת התלמידים הבית-ספרית. בתוך זמן קצר, מצאתי את עצמי מתמודד על תפקיד היושב ראש – ומנצח "בבום" תלמידים שגדולים ומנוסים ממני.

המועצה בתחילת השנה הייתה בעיקר תפאורה. המנחה ניהלה את העסק והנחיתה עלינו פרויקטים שהיו חשובים לה. קלטתי שמשהו פה לא עובד נכון – מועצה צריכה לייצג את התלמידים, לא את המבוגרים. 
התחלתי לחקור את הנושא באופן עצמאי, גיליתי לראשונה את תקנון העל ומודלים של מועצות, והתחלתי ליישם אותם אצלנו. שינינו את המבנה, הקמנו ועדות עצמאיות והחזרנו את זכות הבחירה והכוח לנציגים. זה היה הצעד הראשון שלי בהבנה של כוחם של כללים ותקנונים להגנה על עצמאות הנוער.

### הניצחון הגדול
הובלתי פרויקט דגל להקמת גינה קהילתית בבית הספר, שכלל תוכנית פדגוגית לשיעורי טבע ותרומת תוצרת. כחלק מהמהלך, הובלתי פגישה רשמית מול ראש העירייה וצמרת אגף החינוך; למרות האתגרים והספקות בשל גילי הצעיר, הוכחנו רצינות רבה ושכנענו את העירייה להשקיע כ-30,000 ש"ח במיזם.`,
    shift: 300,
  },
  {
    id: 2,
    year: "כיתה ח׳",
    title: "רשמי נבחר ומייצג",
    images: [
      "/images/project30k_1.jpg",
      "/images/project30k_2.jpg",
      "/images/project30k_3.jpg"
    ],
    details: `התמודדתי שוב על תפקיד יושב ראש ונבחרתי לתפקיד סגן היושב ראש (סיו"ר). באותה התקופה, בשל היעדרויות רבות של היושב ראש, עיקר עבודת המועצה נפלה עליי ומצאתי את עצמי מוביל את המערכת בפועל.

במקום לעסוק רק בכיבוי שריפות, בחרתי לשים דגש רב על תהליכי תקינות באותה השנה. הובלנו כתיבה ואישור דמוקרטי של תקנון חדש לפי הדרישות, והעברנו את המועצה לעבודה מדויקת לפי המודל הארגוני הרשמי של מועצות התלמידים והנוער.

### מחוברים לשטח
במקביל, עבדנו קשה כדי להיות הכי מחוברים לשטח שאפשר. פתחנו עמוד אינסטגרם וקבוצת וואטסאפ ייעודית שהגיעה לתפוצה חסרת תקדים של כ-73% מכלל תלמידי בית הספר. דרך הערוצים האלו הרצנו סקרי שביעות רצון ואספנו רעיונות מהתלמידים באופן קבוע, כדי לוודא שהקול של כולם נשמע ומיוצג.`,
    shift: -330,
  },
  {
    id: 3,
    year: "כיתה ט׳",
    title: "רף חדש",
    images: [
      "/images/project30k_1.jpg",
      "/images/project30k_2.jpg",
      "/images/project30k_3.jpg"
    ],
    details: `בפתח שנת הלימודים, אחרי קריאה מעמיקה של תקנון העל, שאלתי את מנחת המועצה למה אין מועצה עירונית בהוד השרון. כשגיליתי שהגוף הזה פשוט לא קיים, סירבתי לקבל את המצב. השגתי את המספר של מנהל מחלקת הנוער, ומשם המשכתי לפגישות רשמיות עם סגנית ראש העיר וראש העיר עצמו. גייסתי בעצמי נציגים מ-10 מתוך 12 חטיבות ותיכונים בעיר; המועצה אמנם לא קמה רשמית בשנה הזו, אבל הנחנו יחד את הבסיס האיתן לעתיד.

### במקביל: המהפכה ברמה הבית-ספרית
ברמה הבית-ספרית המשכנו בכל הכוח. הובלנו מליאה מלאה של 50 נציגים, שמרנו על תהליכי תקינות קשוחים והובלנו מהלכים ששינו את חיי התלמידים – כמו יצירת תקדים שאפשר לתלמידים שנכשלו לגשת למועדי ב׳, דבר שלא היה קיים לפני כן בבית הספר.

המבוגרים, שהיה קשה לעבוד מולם בהתחלה, כבר התרגלו למנהיגות הנוער שהצבנו בפניהם. הפכנו לשותפים מלאים עם פגישות קבועות אחת לחודש ומעורבות ישירה בכל החלטה. בשנה הזו פשוט הצבנו רף חדש לחלוטין.`,
    shift: 350,
  },
  {
    id: 4,
    year: "כיתה י׳",
    title: "מתחילים מאפס",
    images: [
      "/images/project30k_1.jpg",
      "/images/project30k_2.jpg",
      "/images/project30k_3.jpg"
    ],
    details: `במהלך החופש הגדול, קבעתי שוב פגישות עם בכירים בעירייה כדי לוודא שהפעם המועצה העירונית תוקם, והתמודדתי ונבחרתי לתפקיד יושב ראש המועצה העירונית (יו"ר). למרות ההבטחות של המערכת, שנת הלימודים נפתחה ושוב מצאנו את עצמינו ללא מועצה מתפקדת. סירבתי לוותר – בתור היו"ר הנבחר קבעתי פגישה דחופה עם ראש העירייה, הצגתי לו את עקרונות המועצה ולמה הנוער חייב גוף מייצג. בזכות העקשנות הזו, המועצה העירונית של הוד השרון יצאה לדרך באופן רשמי.

### מבנייה מאפס לביסוס הדמוקרטיה
ההתחלה שלי בתפקיד הייתה מורכבת מאוד – הגענו כמות מעטה של נציגים ממספר מצומצם של בתי ספר. אבל לאורך השנה הובלנו תהליך עומק אמיתי: דאגנו להניע תהליכי בחירות רשמיים בתוך בתי הספר, גייסנו נציגים מתנועות הנוער השונות בעיר, וקיימנו לראשונה בחירות דמוקרטיות למזכירות המועצה ולנציגים המחוזיים. הפכנו מרעיון על הנייר לגוף מתפקד, חזק ומייצג.`,
    shift: -310,
  },
  {
    id: 5,
    year: "כיתה י״א",
    title: "שמים את הנוער במרכז",
    images: [
      "/images/project30k_1.jpg",
      "/images/project30k_2.jpg",
      "/images/project30k_3.jpg"
    ],
    details: `בכיתה י״א הגשמתי חלום גדול ונבחרתי לכהן כיו״ר הוועדה האתית-משפטית במועצת התלמידים והנוער של מחוז מרכז. את נאום הבחירות שלי פתחתי אז עם המספר ״18״ – שסימל את כמות הרשויות הפעילות במחוז באותה העת. אחרי שנה ארוכה ואינטנסיבית של עבודה קשה, אני גאה לעמוד היום מאחורי המספר 31, שמייצג את כמות הרשויות הפעילות והמיוצגות כיום במחוז.

### בניית כלים והנגשת האתיקה לשטח
במהלך השנה הובלנו תהליך מיפוי רשותי מקיף והתאמנו תהליכים אתיים מדויקים לצרכים של כל רשות ובית ספר. כדי להנגיש את עולם התקנונים והתקינות, פיתחנו תבנית תקנון מובנית וקלה ליישום שכל רשות יכולה לאמץ ולהעביר לאישור המליאה שלה בזריזות. בנוסף, קיימנו יום שיא מחוזי שהוקדש כולו לאתיקה, ואישרנו את מסמך הוועידה המחוזי הרשמי שמייצג את הצרכים האמיתיים של הנוער במחוז. הגשמנו חלום, והשארנו חותם.`,
    shift: 330,
  },
];

export default function AboutMe() {
  const [activeMilestone, setActiveMilestone] = useState(null);
  const timelineRef = useRef(null);
  const dotRefs = useRef([]);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const [linePath, setLinePath] = useState("");
  const [lineBox, setLineBox] = useState({ width: 0, height: 0 });

  const openMilestone = (milestone, event) => {
    lastTriggerRef.current = event.currentTarget;
    setActiveMilestone(milestone);
  };

  const closeMilestone = () => {
    setActiveMilestone(null);
    lastTriggerRef.current?.focus();
  };

  useEffect(() => {
    if (!activeMilestone) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMilestone();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeMilestone]);

  useLayoutEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const computePath = () => {
      const containerRect = container.getBoundingClientRect();
      const points = dotRefs.current
        .filter(Boolean)
        .map((dot) => {
          const rect = dot.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          };
        });

      setLineBox({ width: containerRect.width, height: containerRect.height });

      if (points.length < 2) {
        setLinePath("");
        return;
      }

      let d = `M ${points[0].x},${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const cp1y = prev.y + (curr.y - prev.y) / 3;
        const cp2y = prev.y + (2 * (curr.y - prev.y)) / 3;
        d += ` C ${prev.x},${cp1y} ${curr.x},${cp2y} ${curr.x},${curr.y}`;
      }

      setLinePath(d);
    };

    computePath();

    const observer = new ResizeObserver(computePath);
    observer.observe(container);

    document.fonts?.ready?.then(computePath);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutMe">
      <div className="aboutMeContent">
        <h1 className="almoni brand-blue">קצת עליי</h1>
        
        {/* אלמנט Flex שמחזיק את התמונות מימין ואת הטקסט משמאל */}
        <div className="aboutMainFlex">
          
          {/* גלריית קולאז' תמונות אישיות (מתייצבת מימין בגלל ה-RTL) */}
          <div className="aboutGallery">
            <div className="galleryItem">
              <img src="/images/img1.jpg" alt="תומי דניאלי - עשייה במועצות" />
            </div>
            <div className="galleryItem">
              <img src="/images/img2.jpg" alt="תומי דניאלי - מגמת מוזיקה" />
            </div>
            <div className="galleryItem">
              <img src="/images/youngambassadors.png" alt="תומי דניאלי - שגרירים צעירים" />
            </div>
          </div>

          {/* הטקסט שנדחף שמאלה */}
          <div className="bodyText">
            <p className="introParagraph">היי, כאן תומי,</p>
            
            <p>
              למי שמכיר ולמי שפחות – אני תומי דניאלי מהוד השרון. היום אני תלמיד כיתה י"ב בתיכון רמון, הבן האמצעי מבין שלושה אחים, וביום-יום שלי, מעבר למועצות, אני <strong>מוזיקאי במגמת מוזיקה כזמר ופסנתרן</strong>, שכבגיסט בצופים וחבר בתוכנית "שגרירים צעירים".
            </p>
            <p>
              הרומן שלי עם עולם המועצות התחיל בכיתה ז', כשנבחרתי להיות יו"ר המועצה של בית הספר שלי. מהרגע הראשון הרגשתי שמצאתי את המקום שלי – המקום שבו אפשר לא רק לדבר, אלא להוביל ולשנות. מאז נשאבתי לעשייה הזו בכל הכוח: מהקמת המועצה העירונית בהוד השרון וכשנבחרתי לעמוד בראשה, דרך ייצוג ישראל במשלחות הסברה ועד למפגש בבית הנשיא.
            </p>

            <h3 className="sectionSubtitle">למה דווקא הוועדה האתית-משפטית?</h3>
            <p>
              בתוך כל תחנות הדרך האלו, תמיד נמשכתי לצד הפחות "זוהר" אבל הכי משפיע של המערכת. בתור מי שמרחיב משפטים, תמיד עניין אותי איך המנגנון עובד מבפנים. הבנתי שמאחורי כל תקציב, אירוע או זכות שיש לנו כבני נוער, עומדים חוקים, כללים ותקנונים קשוחים. <strong>בלי הבסיס המשפטי והאתי הזה – שום דבר לא באמת יציב.</strong>
            </p>

            <p>
              האתר הזה, והחלקים שתראו כאן בהמשך, הם לא סיכום של מה שעשיתי – הם מפת הדרכים למה שאני מאמין שצריך לקרות עכשיו כדי להבטיח את הכוח של המועצה לשנים קדימה.
            </p>
          </div>

        </div>

        <h1 className="almoni brand-blue timelineSectionTitle">המסע שלי</h1>
      </div>

      {/* ציר הזמן */}
      <div className="timeline" ref={timelineRef}>
        <svg
          className="timelineLine"
          viewBox={`0 0 ${lineBox.width} ${lineBox.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={linePath}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="8"
            strokeDasharray="16 16"
            opacity="0.4"
          />
        </svg>

        {milestones.map((milestone, index) => {
          const isRight = milestone.shift >= 0;
          return (
            <div className="timelineItem" key={milestone.id}>
              <div
                className="timelineCardWrap"
                style={{ "--shift": `${milestone.shift}px` }}
              >
                <div
                  className={`timelineDot ${isRight ? "dotLeft" : "dotRight"}`}
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                />
                <span
                  className={`timelineYear ${isRight ? "yearLeft" : "yearRight"}`}
                >
                  {milestone.year}
                </span>
                <button
                  type="button"
                  className="timelineCard"
                  onClick={(event) => openMilestone(milestone, event)}
                >
                  <h2>{milestone.title}</h2>
                  <span className="timelineCardHint">לחצו לפרטים נוספים</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* חלון המודל (קופץ) עם פירוק טקסט לפסקאות וכותרות מעוצבות */}
      {activeMilestone && (
        <div className="timelineModalOverlay" onClick={closeMilestone}>
          <div
            className="timelineModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`milestone-title-${activeMilestone.id}`}
            aria-describedby={`milestone-desc-${activeMilestone.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="timelineModalClose"
              aria-label="סגירה"
              ref={closeButtonRef}
              onClick={closeMilestone}
            >
              ✕
            </button>
            <h2 id={`milestone-title-${activeMilestone.id}`} className="modalMainTitle">
              {activeMilestone.title}
            </h2>
            
            {/* פירוק הטקסט לשורות ועיבוד כותרות פנימיות */}
            <div id={`milestone-desc-${activeMilestone.id}`} className="modalBodyContent">
              {activeMilestone.details.split("\n").map((line, index) => {
                if (!line.trim()) return null;
                
                // אם השורה מתחילה ב-### נציג אותה ככותרת פנימית מודגשת
                if (line.startsWith("###")) {
                  return <h4 key={index} className="modalInnerTitle">{line.replace("###", "").trim()}</h4>;
                }
                
                // אחרת, שורה רגילה כפסקה
                return <p key={index}>{line}</p>;
              })}
            </div>

            {/* 3 תמונות קטנות המוצגות בתחתית המודל עם אפקט הגדלה */}
            {activeMilestone.images && activeMilestone.images.length > 0 && (
              <div className="modalImagesRow">
                {activeMilestone.images.map((imgUrl, idx) => (
                  <div className="modalImageThumb" key={idx}>
                    <img src={imgUrl} alt={`${activeMilestone.title} ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
