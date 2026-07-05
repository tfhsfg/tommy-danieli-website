import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container} dir="rtl">
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>אופס! העמוד שחיפשת לא נמצא</h2>
      <p style={styles.text}>
        נראה שהגעת לקישור שגוי או שהעמוד הוסר. אל דאגה, תמיד אפשר לחזור להתחלה.
      </p>
      <Link to="/" style={styles.button}>
        חזרה לדף הבית
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70vh",
    textAlign: "center",
    padding: "20px",
    fontFamily: '"Heebo", Arial, sans-serif',
    color: "var(--text, #0f172a)",
  },
  title: {
    fontSize: "96px",
    fontWeight: "900",
    color: "var(--red, #e11d48)",
    margin: "0 0 10px 0",
    lineHeight: "1",
  },
  subtitle: {
    fontSize: "24px",
    color: "var(--primary, #003b89)",
    fontWeight: "700",
    marginBottom: "15px",
  },
  text: {
    fontSize: "18px",
    color: "#64748b",
    maxWidth: "500px",
    marginBottom: "30px",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "var(--primary, #003b89)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
  },
};