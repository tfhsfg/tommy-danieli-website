import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import "./Layout.css";

const menuItems = [
  { label: "הבית", to: "/" },
  { label: "עליי", to: "/aboutme" },
  { label: "מיישרים קו", to: "/plans" },
  { label: "אירועים", to: "/events" },
  { label: "שותפים", to: "/partners" },
  { label: "תכנית שנתית", to: "/annual-plan" },
];

const dropdownItems = [
  { label: "מיישרים קו בשפה הארגונית", to: "/organizationallanguage" },
  { label: "מיישרים קו בוועדה", to: "/committee" },
  { label: "מיישרים קו במורחבת", to: "/regional" },
  { label: "מיישרים קו בחקיקה", to: "/regulations" },
  { label: "מיישרים קו בחינוך", to: "/education" },
  { label: "כל התוכניות", to: "/plans" },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = (e) => {
    // בודק אם הגולש נמצא במובייל (מסך קטן מ-900 פיקסלים)
    if (window.innerWidth <= 900) {
      e.preventDefault(); // מונע מעבר עמוד מיידי
      e.stopPropagation(); // מונע סגירה של התפריט הראשי
      setIsDropdownOpen(!isDropdownOpen); // פותח/סוגר את הדרופדאון במובייל
    }
  };

  return (
    <div className="site" dir="rtl">
      <header className="header">
        <nav
          className="nav"
          style={{
            "--nav-underline": `url(${import.meta.env.BASE_URL}images/line.svg)`,
          }}
        >
          {/* כפתור המבורגר למובייל */}
          <button 
            className={`hamburgerBtn ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="תפריט ניווט"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* תפריט הניווט הראשי */}
          <ul className={`menu ${isMenuOpen ? "menuActive" : ""}`}>
            {menuItems.map((item) => (
              <li key={item.label} className="menuItem">
                {item.label === "מיישרים קו" ? (
                  <div className={`dropdownWrap ${isDropdownOpen ? "dropdownActive" : ""}`}>
                    {/* כאן שינינו ל-a רגיל כדי לשמור על מבנה ה-CSS המקורי של המחשב ללא פגיעה בחץ */}
                    <a 
                      href="#"
                      className="menuButton"
                      onClick={handleDropdownClick}
                    >
                      <span>{item.label}</span>
                      <span className="chevron">▼</span>
                    </a>

                    <div className="dropdown">
                      {dropdownItems.map((dropItem) =>
                        dropItem.to ? (
                          <Link to={dropItem.to} key={dropItem.label} onClick={handleLinkClick}>
                            {dropItem.label}
                          </Link>
                        ) : (
                          <a href="#" key={dropItem.label} onClick={handleLinkClick}>
                            {dropItem.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ) : item.to ? (
                  <Link to={item.to} onClick={handleLinkClick}>{item.label}</Link>
                ) : (
                  <a href="#" onClick={handleLinkClick}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>

          {/* לוגו האתר */}
          <Link to="/" className="logoLink" aria-label="תומי דניאלי" onClick={handleLinkClick}>
            <img style={{ marginTop: "10px" }} src={`${import.meta.env.BASE_URL}images/logo.png`} alt="תומי דניאלי" />
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="socials">
          <a href="mailto:tomdanieli2009@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="tel:+972585657241" aria-label="Phone">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="https://wa.link/4oxkwt" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/tommy.danieli/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/tommy-danieli-258a47237/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        <div className="footerLine">
          <span>© כל הזכויות שמורות לתומי דניאלי 2026</span>
        </div>
      </footer>
    </div>
  );
}