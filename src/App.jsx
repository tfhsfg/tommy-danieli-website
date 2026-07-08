import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import { routes } from "./seo/routes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
