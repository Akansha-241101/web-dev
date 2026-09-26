import { cardsContent } from "../content";

function CardsDetail() {
  return;
}

function Cards() {
  return (
    <div className="flex gap-4 justify-center w-full">
      {cardsContent.cards.map((card) => {
        return (
          <article className="flex flex-col gap-2 p-6 border-2 border-border/30 hover:border-border hover:bg-bg-soft duration-300 w-1/3">
            <span>Icon</span>
            <p className="font-cormorant font-medium text-4xl">
              {card.heading}
            </p>
            <p className="flex-1 text-lg font-sans text-text/85">
              {card.description}
            </p>
            <button className="py-2 border border-border hover:bg-bg-soft text-center text-text mt-10 cursor-pointer">
              {card.button}
            </button>
          </article>
        );
      })}
    </div>
  );
}
export default Cards;
