import { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SliderSection from "./components/SliderSection";
import BrandSection from "./components/BrandSection";
import ProblemSection from "./components/ProblemSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import SectorSection from "./components/SectorSection";
import AboutSection from "./components/AboutSection";
// import VideoSection from "./components/VideoSection";
import FeatureSection from "./components/FeatureSection";
import TestimonialSection from "./components/TestimonialSection";
import PortfolioSection from "./components/PortfolioSection";
import CounterSection from "./components/CounterSection";
import FAQSection from "./components/FAQSection";
import TeamSection from "./components/TeamSection";
// // import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    document.body.classList.add("loaded");
  }, []);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    const timer = setTimeout(() => {
      script = document.createElement("script");
      script.src = "/sample/assets/js/theme.js";
      document.body.appendChild(script);
    }, 100);
    return () => {
      clearTimeout(timer);
      if (script?.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="loader-wrapper">
        <div className="loader" />
        <div className="loder-section left-section" />
        <div className="loder-section right-section" />
      </div>

      <Header />
      <Sidebar />
      <SliderSection />
      <BrandSection />
      <ProblemSection />
      <ServicesSection />
      <PricingSection />
      <SectorSection />
      <AboutSection />
      {/* <VideoSection /> */}
      <FeatureSection />
      <TestimonialSection />
      <PortfolioSection />
      <CounterSection />
      <FAQSection />
      <TeamSection />
      {/* <BlogSection /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
