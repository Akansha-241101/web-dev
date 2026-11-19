import { AccordionComponent } from "./components/AccordionComponent";
import { DUMMY_FAQ_DATA } from "./constants/accordionData";

const App = () => {
  return (
    <main className="main-content">
      <section className="accordion-section">
        <div className="accordion-header">
          <h2>Accordion Section</h2>
          <p>Accordion custom component built using react for practice</p>
        </div>
        <AccordionComponent data={DUMMY_FAQ_DATA} />
      </section>
    </main>
  );
};

export default App;
