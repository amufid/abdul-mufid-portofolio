import ScrollTop from './lib/ScrollTop';
import NavSection from './components/navSection';
import CoverSection from './components/coverSection';
import AboutSection from './components/aboutSection';
import SkillsSection from './components/skillsSection';
import ProjectSection from './components/projectSection';
import ContactSection from './components/contactSection';
import FooterSection from './components/footerSection';

function App() {
  return (
    <div className='dark:bg-slate-900'>
      <NavSection>
        <CoverSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </NavSection>
      <FooterSection />
      <ScrollTop />
    </div>
  );
}

export default App;
