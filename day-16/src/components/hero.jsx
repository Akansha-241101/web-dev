import Cards from "./Cards";

function Hero() {
  return (
    <section className="flex flex-col p-section gap-2 lg:gap-4 justify-center items-center bg-bg w-full">
      <div className="font-sans text-sm text-text/75 uppercase"> Begin Here </div>
      <div className="text-4xl lg:text-[52px] font-medium font-cormorant text-text/95 flex flex-col justify-center items-center gap-2 mb-6">
        <p>Three ways to spend time</p>
        <p> with the work</p>
      </div>
      <Cards />
    </section>
  );
}
export default Hero;
