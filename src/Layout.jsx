import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "./Layout.css";
import { preloadImages } from "./utils/preloadImages";
import { routes } from "./seo/routes";
import Seo from "./components/Seo";

const menuItems = [
  { label: "הבית", to: "/" },
  { label: "עליי", to: "/aboutme" },
  { label: "החזון שלי", to: "/plans" },
];

const dropdownItems = [
  { label: "הטמעת השפה הארגונית", to: "/organizationallanguage" },
  { label: "פתיחת תקנון העל", to: "/regulations" },
  { label: "הוועדה האתית-משפטית", to: "/committee" },
  { label: "מורחבת יו״רי האתיקה", to: "/regional" },
  { label: "חקיקה בכנסת", to: "/legislation" },
  { label: "יישום מסמך הוועידה ה-30", to: "/conference" },
  { label: "כחבר מזכירות", to: "/partners" },
  { label: "כל התוכניות", to: "/plans" },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const currentRoute = routes.find((route) => route.path === pathname);

  // בכל מעבר עמוד גוללים חזרה לראש הדף, כדי שהעמוד החדש יתחיל מלמעלה
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // מריצים את טעינת התמונות ברקע אחרי שהעמוד הראשון כבר נטען,
  // כדי לא להתחרות על רוחב פס עם התוכן הקריטי של הטעינה הראשונה
  useEffect(() => {
    const idleRequest = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    const idleCancel = window.cancelIdleCallback || clearTimeout;
    const id = idleRequest(preloadImages);
    return () => idleCancel(id);
  }, []);

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
      {currentRoute ? (
        <Seo
          title={currentRoute.title}
          description={currentRoute.description}
          path={currentRoute.path}
          image={currentRoute.image}
          jsonLd={currentRoute.jsonLd}
          noindex={currentRoute.noindex}
        />
      ) : (
        <Seo
          title="העמוד לא נמצא"
          description="העמוד שחיפשת לא נמצא באתר של תומי דניאלי."
          path={pathname}
          noindex
        />
      )}

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
                {item.label === "החזון שלי" ? (
                  <div className={`dropdownWrap ${isDropdownOpen ? "dropdownActive" : ""}`}>
                    <Link
                      to={item.to}
                      className="menuButton"
                      onClick={handleDropdownClick}
                    >
                      <span>{item.label}</span>
                      <span className="chevron">▼</span>
                    </Link>

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