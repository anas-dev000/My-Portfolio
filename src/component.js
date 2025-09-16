import HeroComponent from "./Components/Sections/HeroSection";
import AboutSection from "./Components/Sections/AboutSection";
import ProjectsSection from "./Components/Sections/ProjectsSection";
import SkillsSection from "./Components/Sections/SkillsSection";
import ContactSection from "./Components/Sections/ContactSection";
import Footer from "./Components/Sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroComponent></HeroComponent>

      <AboutSection></AboutSection>

      <ProjectsSection></ProjectsSection>

      <SkillsSection></SkillsSection>

      <ContactSection></ContactSection>

      <Footer></Footer>
    </div>
  );
};

export default Index;
