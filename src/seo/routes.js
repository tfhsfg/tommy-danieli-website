import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Plans from "../pages/Plans";
import Education from "../pages/Education";
import Legislation from "../pages/Legislation";
import Committee from "../pages/Committee";
import Regional from "../pages/Regional";
import OrganizationalLanguage from "../pages/OrganizationalLanguage";
import Regulations from "../pages/Regulations";
import Partners from "../pages/Partners";
import Conference from "../pages/Conference";
import { SITE_URL, DEFAULT_IMAGE, SOCIAL_LINKS } from "./site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "תומי דניאלי",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/logo.png`,
  jobTitle:
    'יו"ר ועדת אתית-משפטית הארצית ומועמד ליועץ המשפטי של מועצת התלמידים והנוער הארצית',
  sameAs: SOCIAL_LINKS,
};

// מקור אמת יחיד: משמש גם את הראוטים באפליקציה, גם את ה-SEO (title/description),
// גם את סקריפט ה-prerender וגם את מפת האתר (sitemap.xml) שנוצרים בזמן הבנייה
export const routes = [
  {
    path: "/",
    component: Home,
    title: "תומי דניאלי – מועמד ליועץ המשפטי | מיישרים קו",
    description:
      'תומי דניאלי, יו"ר ועדת אתית-משפטית הארצית ומועמד ליועץ המשפטי של מועצת התלמידים והנוער הארצית. תוכנית עבודה מלאה לוועדה, לחינוך, לתקנון ולמורחבת – מיישרים קו.',
    image: DEFAULT_IMAGE,
    jsonLd: personJsonLd,
    priority: 1.0,
  },
  {
    path: "/aboutme",
    component: AboutMe,
    title: "קצת עליי",
    description:
      'תומי דניאלי מהוד השרון: מיו"ר מועצת תלמידים בבית הספר ועד יו"ר ועדת אתית-משפטית הארצית – הדרך והמסע האישי שהובילו למועמדות ליועץ המשפטי.',
    priority: 0.8,
  },
  {
    path: "/plans",
    component: Plans,
    title: 'תוכניות עבודה – "הסכם חדש"',
    description:
      'כל תוכניות העבודה של תומי דניאלי במקום אחד: חינוך, ועדה, מורחבת, תקנון-על וחקיקה – ה"הסכם החדש" למען מועצת התלמידים והנוער.',
    priority: 0.9,
  },
  {
    path: "/education",
    component: Education,
    title: "מיישרים קו בחינוך",
    description:
      "תוכנית לאומית בחירום למערכת החינוך: קו חם וחמ\"ל דיגיטלי לזכויות תלמידים, שיעורי אוריינות מדיה ושיח אזרחי, ומעבר מהערכה של שינון לחשיבה.",
    priority: 0.8,
  },
  {
    path: "/legislation",
    component: Legislation,
    title: "מיישרים קו בחקיקה",
    description:
      'חיקוק "חוק המועצה הארצית" בכנסת: מעמד סטטוטורי, תקציב מובטח והכרה בכל גלגלי הנציגות – הארצי, המחוזי, הרשותי והבית-ספרי.',
    priority: 0.8,
  },
  {
    path: "/committee",
    component: Committee,
    title: "מיישרים קו בוועדה",
    description:
      "חזון לוועדה אתית-משפטית אידיאלית: תרבות של אמון ושותפות, מבנה פגישות ממוקד ומיומנויות מנהיגות מעשיות למאה ה-21.",
    priority: 0.8,
  },
  {
    path: "/regional",
    component: Regional,
    title: "מיישרים קו במורחבת",
    description:
      "הפורום של יושבי ראש הוועדות האתיות-משפטיות: הכשרה מקצועית, מיפוי צרכים והטמעת השפה הארגונית והתקינות המועצתית.",
    priority: 0.7,
  },
  {
    path: "/organizationallanguage",
    component: OrganizationalLanguage,
    title: "מיישרים קו בשפה הארגונית",
    description:
      "הרפורמה המבנית להטמעת שפה ארגונית אחידה: מודל משילות ובקרה, מיפוי חסמים בשטח ומענה אסטרטגי לחיזוק הגלגלים.",
    priority: 0.7,
  },
  {
    path: "/regulations",
    component: Regulations,
    title: "מיישרים קו בתקנון העל",
    description:
      "מהלך היסטורי לפתיחת תקנון העל: הבנת העקרונות, חיבור השטח וביטול סעיפים בירוקרטיים מיותרים – בשותפות מלאה עם כלל הגלגלים.",
    priority: 0.7,
  },
  {
    path: "/partners",
    component: Partners,
    title: "שותפים",
    description:
      "השותפים והגורמים שמובילים יחד עם תומי דניאלי את הדרך לשינוי המערכת למען מועצת התלמידים והנוער.",
    priority: 0.5,
    // התוכן בעמוד הזה עדיין placeholder (שמות ותיאורים גנריים) - נשאר לא-מאונדקס עד שיתעדכן
    noindex: true,
  },
  {
  path: "/conference",
  component: Conference,
  title: "יישום החלטות הוועידה ה-30 | מתחברים",
  description: "מתמקדים בתכלס ובבניית הכוח הפנימי של הארגון: מיסוד מנגנוני תקשורת, שיפור תדמית המועצה וחיזוק השטח והגלגלים.",
  priority: 0.8,
  },
];
