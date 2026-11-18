import { DUMMY_FAQ_DATA } from "./constants/accordionData";
import { AccordionComponent } from "./components/AccordionComponent";
import { useEffect } from "react";

function App() {
  const handleToggleTheme = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "d") {
      document.documentElement.classList.toggle("dark");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleToggleTheme);

    return () => {
      document.removeEventListener("keydown", handleToggleTheme);
    };
  }, []);
  return (
    <main className="main-content" role="main">
      <section
        className="accordion-section"
        aria-labelledby="accordion-heading"
      >
        <div className="accordion-header">
          <h2 className="accordion-heading" id="accordion-heading">
            Accordion Section
          </h2>
          <p>
            This is an example of an accordion component built with React. Click
            on the headers to expand or collapse the content.
          </p>
        </div>
        <AccordionComponent data={DUMMY_FAQ_DATA} multipleOpen={false} />
      </section>
    </main>
  );
}

export default App;
