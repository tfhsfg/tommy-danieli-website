import "./App.css";

const menuItems = ["הבית", "יישור קו", "עליי", "אירועים", "שותפים", "תכנית שנתית"];

const dropdownItems = [
  "חוק המשרתים",
  "מערכת החינוך",
  "שיקום פצועי צה״ל וכוחות הביטחון",
  "חוק קרית שמונה",
  "כל התוכניות",
];

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

export default function App() {
  return (
    <div className="site" dir="rtl">
      <header className="header">
        <nav className="nav">
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item} className="menuItem">
                {item === "יישור קו" ? (
                  <div className="dropdownWrap">
                    <button className="menuButton">
                      <span>{item}</span>
                      <span className="chevron">▼</span>
                    </button>

                    <div className="dropdown">
                      {dropdownItems.map((dropItem) => (
                        <a href="#" key={dropItem}>
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a href="#">{item}</a>
                )}
              </li>
            ))}
          </ul>

          <a href="#" className="logoLink" aria-label="תומי דניאלי">
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="תומי דניאלי" />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src={`${import.meta.env.BASE_URL}images/hero-banner.png`} alt="תומי דניאלי - מיישרים קו" />
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
      </main>

      <footer className="footer">
        <div className="socials">
          <a href="#" aria-label="Email">✉</a>
          <a href="#" aria-label="Phone">☎</a>
          <a href="#" aria-label="WhatsApp">☏</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>

        <div className="footerLine">
          <span>058-5657241</span>
          <span>© כל הזכויות שמורות לתומי דניאלי 2026</span>
        </div>
      </footer>
    </div>
  );
}