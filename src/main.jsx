import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const rootEl = document.getElementById('root')

// דפים שנוצרו מראש (prerender) מגיעים עם תוכן קיים ב-root וצריך "hydrate";
// בסביבת פיתוח (vite dev) ה-root ריק, אז עושים רינדור רגיל מהלקוח
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
