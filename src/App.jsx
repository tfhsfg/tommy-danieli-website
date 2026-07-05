import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Plans from "./pages/Plans";
import Education from "./pages/Education";
import Regulations from "./pages/Regulations";
import Committee from "./pages/Committee";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/education" element={<Education />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/committee" element={<Committee />} />
      </Route>
    </Routes>
  );
}
