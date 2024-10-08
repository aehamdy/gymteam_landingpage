import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        {/* <div className="sticky top-0 max-w-6xl mx-auto px-6">
      </div> */}
        <HeroSection />
      </div>
    </>
  );
}

export default App;
