const cards = [
  {
    title: "חוק המשרתים של בנט",
    text: "גיוס שוויוני לכולם, חיזוק צה״ל והבטחת ביטחון ישראל.",
  },
  {
    title: "אחדות ישראל היא משימה לאומית",
    text: "נחזק את החוסן החברתי ונבנה חברה מאוחדת.",
  },
  {
    title: "ישראל יקרה לנו גם בכיס",
    text: "ננהל כלכלה חופשית, נוריד יוקר מחיה ונדאג לעתיד כלכלי יציב.",
  },
  {
    title: "מדינה יהודית, דמוקרטית וליברלית",
    text: "נשמור על הערכים ועל אופייה של ישראל כמדינה חזקה וחופשית.",
  },
];

function ScaleIcon() {
  return (
    <svg viewBox="0 0 120 120" className="scaleIcon" aria-hidden="true">
      <path d="M60 18v80" />
      <path d="M34 98h52" />
      <path d="M45 18h30" />
      <circle cx="60" cy="18" r="8" />
      <path d="M60 28L28 42" />
      <path d="M60 28l32 14" />
      <path d="M28 42l-18 34h36L28 42z" />
      <path d="M92 42L74 76h36L92 42z" />
      <path d="M10 76c4 10 32 10 36 0" />
      <path d="M74 76c4 10 32 10 36 0" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={`${import.meta.env.BASE_URL}public/images/hero-banner.png`} alt="תומי דניאלי - מיישרים קו" />
      </section>

      <section className="almoni">
        <h1 className="almoni brand-blue">
          <strong>הגיע הזמן ליישר קו.</strong>
        </h1>

        <p className="subtitle brand-blue" style={{ visibility: "hidden" }}>
          ימנית, ציונית וליברלית
        </p>

        <div className="cardsGrid">
          {cards.map((card) => (
            <article className="card" key={card.title}>
              <ScaleIcon />
              <div className="cardText">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="readMoreContainer">
          <button className="readMoreButton almoni">
            לקריאה עוד
          </button>
        </div>
      </section>

      <section className="videoPlaceholder">
        <div className="playButton">▶</div>
      </section>
    </>
  );
}
