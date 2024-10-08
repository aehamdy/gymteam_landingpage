import About from "./components/About";
import BackgroundSection from "./components/BackgroundSection";
import Coaches from "./components/Coaches";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

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
      </div>
    </>
  );
}

export default App;
