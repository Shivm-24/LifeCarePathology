import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Packages from "../components/Packages";
import HomeCollection from "../components/HomeCollection";
import AppointmentForm from "../components/AppointmentForm";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <Packages />
      <HomeCollection />
      <AppointmentForm />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;