import { Link, Outlet } from "react-router-dom";
import "./App.css";

const menuItems = [
  { label: "הבית", to: "/" },
  { label: "יישור קו" },
  { label: "עליי", to: "/aboutme" },
  { label: "אירועים" },
  { label: "שותפים" },
  { label: "תכנית שנתית" },
];

const dropdownItems = [
  "חוק המשרתים",
  "מערכת החינוך",
  "שיקום פצועי צה״ל וכוחות הביטחון",
  "חוק קרית שמונה",
  "כל התוכניות",
];

export default function Layout() {
  return (
    <div className="site" dir="rtl">
      <header className="header">
        <nav className="nav">
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.label} className="menuItem">
                {item.label === "יישור קו" ? (
                  <div className="dropdownWrap">
                    <button className="menuButton">
                      <span>{item.label}</span>
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
                ) : item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <a href="#">{item.label}</a>
                )}
              </li>
            ))}
          </ul>

          <Link to="/" className="logoLink" aria-label="תומי דניאלי">
            <img style={{ marginTop: "10px" }} src={`${import.meta.env.BASE_URL}images/logo.png`} alt="תומי דניאלי" />
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="socials">
          <a href="mailto:tomdanieli2009@gmail.com" aria-label="Email">✉</a>
          <a href="tel:+972585657241" aria-label="Phone">☎</a>
          <a href="https://wa.link/4oxkwt" aria-label="WhatsApp">☏</a>
          <a href="https://www.instagram.com/tommy.danieli/" aria-label="Instagram">◎</a>
          <a href="https://www.linkedin.com/in/tommy-danieli-258a47237/" aria-label="LinkedIn">in</a>
        </div>

        <div className="footerLine">
          <span>© כל הזכויות שמורות לתומי דניאלי 2026</span>
        </div>
      </footer>
    </div>
  );
}
