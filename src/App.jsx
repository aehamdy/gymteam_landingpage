import About from "./components/About";
import BackgroundSection from "./components/BackgroundSection";
import Blog from "./components/Blog";
import Coaches from "./components/Coaches";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FooterBottomBar from "./components/FooterBottomBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsLetter from "./components/NewsLetter";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <About />
      <Coaches />
      <Schedule />
      <BackgroundSection />
      <Plans />
      <Reviews />
      <Blog />
      <NewsLetter />
      <Footer />
      <FooterBottomBar />
    </>
  );
}

export default App;
