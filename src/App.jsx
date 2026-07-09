import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import { routes } from "./seo/routes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.flatMap(({ path, aliases }) =>
          (aliases || []).map((alias) => (
            <Route key={`${path}-${alias}`} path={alias} element={<Navigate to={path} replace />} />
          ))
        )}
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
