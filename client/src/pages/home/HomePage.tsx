import EmergencyCTA from "./sections/EmergencyCTA";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import ElectricianGallery from "./sections/ElectricianGallery";
import About from "./sections/About";
import ContactCTA from "./sections/ContactCTA";
import DevelopmentNoticeModal from "@/components/DevelopmentNotificationModal";

const HomePage = () => {
  return (
    <>
      <DevelopmentNoticeModal />
      <Hero />
      <Services />
      <ElectricianGallery />
      <EmergencyCTA />
      <About />
      <ContactCTA />
    </>
  );
};

export default HomePage;
