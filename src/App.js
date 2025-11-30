import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/shared/Navbar";
import Layout from "./Components/shared/Layout";
import HeroComponent from "./Components/Sections/HeroSection";
import AboutSection from "./Components/Sections/AboutSection";
import ProjectsSection from "./Components/Sections/ProjectsSection";
import SkillsSection from "./Components/Sections/SkillsSection";
import ContactSection from "./Components/Sections/ContactSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HeroComponent />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
