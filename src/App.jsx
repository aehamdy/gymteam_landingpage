import About from "./components/About";
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
      </div>
    </>
  );
}

export default App;
