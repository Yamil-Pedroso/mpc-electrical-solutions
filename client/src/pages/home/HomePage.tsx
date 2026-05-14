import EmergencyCTA from "./sections/EmergencyCTA";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import ElectricianGallery from "./sections/ElectricianGallery";
import About from "./sections/About";
import ContactSection from "./sections/ContactSection";
import TrustedAssociations from "./sections/TrustAssociations";
import InfoTicker from "./sections/InfoTicker";
import Testimonial from "./sections/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedAssociations />
      <InfoTicker />
      <Services />
      <ElectricianGallery />
      <EmergencyCTA />
      <About />
      <Testimonial />
      <ContactSection />
    </>
  );
};

export default HomePage;
