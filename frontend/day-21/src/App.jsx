import CarouselSection from "./components/CarouselSection";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <main className="main-content">
      <CarouselSection />
      <ProgressBar progressValue={20} />
    </main>
  );
}

export default App;
