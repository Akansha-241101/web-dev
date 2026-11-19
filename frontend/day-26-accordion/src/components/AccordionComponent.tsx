import { useState } from "react";
import type { AccordionComponentProps } from "../types/accordionTypes";
import { AccordionTriggerIcon } from "./AccordionTriggerIcon";

export const AccordionComponent = ({ data }: AccordionComponentProps) => {
  const [activeItemId, setActiveItemId] = useState<null | number>(1);
  console.log(activeItemId);
  return (
    <div className="accordion-container">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`accordion-item ${activeItemId === item.id && "active-item"}`}
          >
            <button
              className="accordion-item-question"
              onClick={() =>
                setActiveItemId((prev) => (prev === item.id ? null : item.id))
              }
            >
              <span>{item.question}</span>
              <span className="accordion-item-icon">
                <AccordionTriggerIcon />
              </span>
            </button>
            <div className="accordion-item-answer">
              <div className="accordion-item-p-wrapper">
                <p className="accordion-item-p">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
