import EmergencyCTA from "./sections/EmergencyCTA";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import About from "./sections/About";
import ContactCTA from "./sections/ContactCTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <EmergencyCTA />
      <About />
      <ContactCTA />
    </>
  );
};

export default HomePage;
