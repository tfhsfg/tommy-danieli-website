import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Plans from "./pages/Plans";
import Education from "./pages/Education";
import Legislation from "./pages/legislation";
import Committee from "./pages/Committee";
import Rehabilitation from "./pages/Regional";
import NotFound from "./pages/NotFound";
import Regional from "./pages/Regional";
import OrganizationalLanguage from "./pages/OrganizationalLanguage";
import Regulations from "./pages/Regulations";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/education" element={<Education />} />
        <Route path="/legislation" element={<Legislation />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/regional" element={<Regional />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/organizationallanguage" element={<OrganizationalLanguage />} />
        <Route path="/regulations" element={<Regulations />} />
      </Route>
    </Routes>
  );
}
