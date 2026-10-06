import { useState } from "react";
import sliderData from "./constants/slidierData";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  console.log(activeSlide);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev < sliderData.slides.length - 3 ? prev + 1 : prev,
    );
  };

  return (
    <main className="main-content">
      <section className="carousel-section">
        <div className="carousel-header">
          <h1>{sliderData.title}</h1>
          <p>{sliderData.description}</p>
        </div>
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${33.3333 * activeSlide}%)`,
              transitionDuration: "400ms",
            }}
          >
            {sliderData.slides.map((slide) => (
              <div key={slide.title} className="carousel-slide">
                <div className="carousel-slide-inner">
                  <img src={slide.image} alt="" />
                  <div className="slide-content">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="prev-btn" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button className="next-btn" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </section>
    </main>
  );
}

export default App;
