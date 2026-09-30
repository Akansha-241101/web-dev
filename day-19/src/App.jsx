import content, { contentDetail } from "./constant/Content";
import { useState } from "react";
import Header from "./component/Header";
import wallimage from "./assets/wallimage.jpg";

function App() {
  const [selectedItem, setSelectedItem] = useState(contentDetail[0]);
  const selectedContent = content.find((item) => item.title === selectedItem);

  return (
    <main className="flex min-h-screen flex-col gap-6 bg-cover bg-center bg-fixed px-4 py-4 sm:px-8 md:px-12 lg:px-20">
      <Header />
      <div className="Hero border border-text rounded-md">
        <div className="Tab-Section flex justify-center border-b text-sm font-semibold text-rose-800/50 hover:text-rose-800/90 sm:text-base md:text-lg">
          {content.map((item) => {
            return (
              <button
                type="button"
                className={`flex-1 border-r border-black px-1 py-3 text-center cursor-pointer last:border-r-0 sm:px-3 sm:py-4 transition-transform duration-300 ease-out hover:scale-105 sm:h-80 md:h-full ${item.title === selectedItem ? "bg-rose text-rose-pale" : ""}`}
                key={item.id}
                onClick={() => setSelectedItem(item.title)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div className="Main-Section flex w-full flex-col items-stretch md:h-[36rem] md:flex-row bg-rose-pale/50">
          <div className="TEXT flex w-full flex-col gap-4 px-5 py-8 sm:px-8 md:w-1/2 md:gap-6 md:px-10 md:py-12 lg:px-15 lg:py-20">
            <h3 className="font-sans text-sm font-semibold text-rose-800/50 hover:text-rose-800/70 sm:text-base">
              {selectedContent.eyebrow}
            </h3>
            <h1 className="font-serif text-4xl font-semibold text-rose-800/80 hover:text-rose-800/90 sm:text-5xl md:text-5xl lg:text-6xl transition-transform duration-300 ease-out hover:scale-105">
              {selectedContent.title}
            </h1>
            <h3 className="text-base leading-relaxed text-rose-950/90 sm:text-lg">
              {selectedContent.description}
            </h3>
            <button className="bg-rose text-rose-pale px-6 py-2 rounded-lg items-center cursor-pointer hover:bg-rose-800/80 font-sans font-semibold w-fit">
              {selectedContent.buttonText}
            </button>
          </div>
          <div className="Img flex w-full p-4 sm:p-6 md:w-1/2">
            <img
              src={selectedContent.image}
              alt={selectedContent.title}
              className="h-64 w-full object-contain transition-transform duration-300 ease-out hover:scale-105 sm:h-80 md:h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
