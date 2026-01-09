import { CinematicNavigation } from './components/CinematicNavigation';
import { CinematicHero } from './components/CinematicHero';
import { AboutSectionCinematic } from './components/AboutSectionCinematic';
import { SkillsSectionCinematic } from './components/SkillsSectionCinematic';
import { WorksSection } from './components/WorksSection';
import { MediaGallerySection } from './components/MediaGallerySection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { LanguagesSection } from './components/LanguagesSection';
import { ContactSectionCinematic } from './components/ContactSectionCinematic';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <CinematicNavigation />
      <CinematicHero />
      <AboutSectionCinematic />
      <SkillsSectionCinematic />
      <WorksSection />
      <MediaGallerySection />
      <ExperienceSection />
      <EducationSection />
      <LanguagesSection />
      <ContactSectionCinematic />
      <Footer />
    </div>
  );
}
