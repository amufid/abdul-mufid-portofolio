import NavSection from "./components/navSection";
import CoverSection from "./components/coverSection";
import AboutSection from "./components/aboutSection";
import SkillsSection from "./components/skillsSection";
import ProjectSection from "./components/projectSection";
import ContactSection from "./components/contactSection";
import FooterSection from "./components/footerSection";
import MetaDescription from "./components/metaDescription";
import ScrollToTop from "./components/ui/ScrollTop";

function App() {
  return (
    <div className="dark:bg-slate-950">
      <MetaDescription />
      <NavSection>
        <CoverSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </NavSection>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}

export default App;
