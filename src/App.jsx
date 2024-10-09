import About from "./components/About";
import BackgroundSection from "./components/BackgroundSection";
import Blog from "./components/Blog";
import Coaches from "./components/Coaches";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="max-w-4xl mx-auto">
        <Features />
        <About />
        <Coaches />
        <BackgroundSection />
        <Plans />
        <Reviews />
        <Blog />
      </div>
    </>
  );
}

export default App;
