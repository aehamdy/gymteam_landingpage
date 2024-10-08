import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="max-w-5xl mx-auto">
        <Features />
      </div>
    </>
  );
}

export default App;
