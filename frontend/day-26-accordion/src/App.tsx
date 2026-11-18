import { DUMMY_FAQ_DATA } from "./constants/accordionData";
import { AccordionComponent } from "./components/AccordionComponent";

const App = () => {
  return (
    <main className="main-content">
      <section className="accordion-section">
        <div className="accordion-header">
          <h2>Accordion Section</h2>
          <p>This is an Accordion practice section.</p>
        </div>
        <AccordionComponent data={DUMMY_FAQ_DATA} />
      </section>
    </main>
  );
};

export default App;
