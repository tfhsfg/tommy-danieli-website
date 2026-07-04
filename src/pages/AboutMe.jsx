import { useEffect, useLayoutEffect, useRef, useState } from "react";

const milestones = [
  {
    id: 1,
    year: "2010",
    title: "כותרת לדוגמה 1",
    details:
      "כאן יופיע הסבר מורחב ומפורט יותר על השלב הזה בחיים. אפשר להוסיף כמה פסקאות, תאריכים ודגשים חשובים שירצה תומי לשתף עם המבקרים באתר.",
    shift: 300,
  },
  {
    id: 2,
    year: "2014",
    title: "כותרת לדוגמה 2",
    details:
      "כאן יופיע הסבר מורחב ומפורט יותר על השלב הזה בחיים. אפשר להוסיף כמה פסקאות, תאריכים ודגשים חשובים שירצה תומי לשתף עם המבקרים באתר.",
    shift: -330,
  },
  {
    id: 3,
    year: "2017",
    title: "כותרת לדוגמה 3",
    details:
      "כאן יופיע הסבר מורחב ומפורט יותר על השלב הזה בחיים. אפשר להוסיף כמה פסקאות, תאריכים ודגשים חשובים שירצה תומי לשתף עם המבקרים באתר.",
    shift: 350,
  },
  {
    id: 4,
    year: "2020",
    title: "כותרת לדוגמה 4",
    details:
      "כאן יופיע הסבר מורחב ומפורט יותר על השלב הזה בחיים. אפשר להוסיף כמה פסקאות, תאריכים ודגשים חשובים שירצה תומי לשתף עם המבקרים באתר.",
    shift: -310,
  },
  {
    id: 5,
    year: "2023",
    title: "כותרת לדוגמה 5",
    details:
      "כאן יופיע הסבר מורחב ומפורט יותר על השלב הזה בחיים. אפשר להוסיף כמה פסקאות, תאריכים ודגשים חשובים שירצה תומי לשתף עם המבקרים באתר.",
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
        <h1 className="almoni brand-blue">עליי</h1>
        <p className="bodyText">
          תומי דניאלי פועל למען חיזוק החוסן החברתי והביטחוני של מדינת ישראל,
          מתוך אמונה במדינה יהודית, דמוקרטית וליברלית שדואגת לכל אזרחיה.
        </p>
      </div>

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
            <h2 id={`milestone-title-${activeMilestone.id}`}>
              {activeMilestone.title}
            </h2>
            <p id={`milestone-desc-${activeMilestone.id}`}>
              {activeMilestone.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
