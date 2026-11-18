import { useState } from "react";

interface AccordionData {
  id: number;
  title: string;
  content: string;
}

interface AccordionComponentProps {
  data: AccordionData[];
}

export const AccordionComponent = ({ data }: AccordionComponentProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(3);
  return (
    <div className="accordion-container">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`accordion-item ${activeItem === item.id && "active-item"}`}
              >
                <button
                  onClick={() =>
                    setActiveItem((prev) => (prev === item.id ? null : item.id))
                  }
                  className="accordion-item-trigger"
                >
                  {item.title}
                </button>
                <div
                  className="accordion-item-content"
                  style={{
                    gridTemplateRows: activeItem === item.id ? "1fr" : "0fr",
                  }}
                >
                  <div className="accordion-item-content-wrapper">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  )
}