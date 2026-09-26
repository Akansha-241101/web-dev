import { cardsContent } from "../constants/content";

function Cards() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-center w-full">
      {cardsContent.cards.map((card) => {
        return (
          <article key={card.heading} className="flex flex-col gap-2 p-6 border border-border/40 hover:border-border hover:bg-bg-soft duration-300 w-full lg:w-1/3">
            <span>{card.icon}</span>
            <p className="font-cormorant font-medium text-[30px]">
              {card.heading}
            </p>
            <p className="flex-1 text-md font-sans text-text/85">
              {card.description}
            </p>
            <button className="py-2 border border-border hover:bg-text hover:text-bg text-center text-text mt-10 cursor-pointer duration-200">
              {card.button}
            </button>
          </article>
        );
      })}
    </div>
  );
}
export default Cards;
