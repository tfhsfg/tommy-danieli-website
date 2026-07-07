// כל התמונות באתר - נטענות ברקע מיד עם עליית העמוד הראשון,
// כך שכשהגולש ינווט לעמוד אחר הן כבר יושבות בקאש של הדפדפן וייטענו מיידית.
export const SITE_IMAGES = [
  "/images/logo.png",
  "/images/line.svg",
  "/images/banner-default.jpg",
  "/images/Artboard-1.png",
  "/images/hero-banner.png",
  "/images/youngambassadors.png",
];

export function preloadImages(paths = SITE_IMAGES) {
  paths.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
