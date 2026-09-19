import heroImage from "../../assets/images/hero.png";
import { heroContent } from "../../constants/websiteContent";

function Hero() {
  return (
    <section className="p-6 lg:p-section flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="bg-light-primary text-primary py-1.5 px-2 rounded-full text-[12px] w-fit">
          {heroContent.badge}
        </div>
        <div className="text-5xl flex flex-col gap-2 font-semibold">
          {heroContent.heading.map((item) => {
            const secondItem = heroContent.heading[1];
            return (
              <span
                key={item}
                className={`${item === secondItem ? "text-primary" : "text-text"}`}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div>{heroContent.description}</div>
        <div className="flex gap-4">
          {heroContent.buttons.map((button) => {
            return (
              <button
                className={`py-2 px-6 rounded-md text-sm lg:text-base ${heroContent.buttons[0] === button ? "bg-primary text-primary-text" : "bg-muted text-text"}`}
              >
                {button}
              </button>
            );
          })}
        </div>
        <div className="flex gap-14">
          {heroContent.stats.map((stat) => {
            return (
              <div>
                <h3 className="font-bold text-[18px]">{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={heroImage} alt="" className="w-full object-cover" />
      </div>
    </section>
  );
}

export default Hero;
