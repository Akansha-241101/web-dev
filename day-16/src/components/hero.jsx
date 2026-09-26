import Cards from "./Cards";

function Hero() {
  return (
    <section className="flex flex-col px-40 py-16 gap-4 justify-center items-center bg-bg w-full">
      <div className="font-sans text-l text-text/75"> Begin Here </div>
      <div className="text-6xl font-medium font-cormorant text-text/95 flex flex-col justify-center items-center gap-2 mb-6">
        <p>Three ways to spend time</p>
        <p> with the work</p>
      </div>
      <Cards />
    </section>
  );
}
export default Hero;
