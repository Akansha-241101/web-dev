import { websiteContent } from "../constants/websiteContent";

function Header() {
  const navItems = websiteContent[0].navigation;
  return (
    <header className="header flex p-section py-6 justify-between">
      <div className="logo text-[22px] font-semibold ">StudyHub</div>
      <nav className="nav flex gap-10 ">
        {navItems.map((navItem) => {
          return (
            <a
              key={navItem}
              className={`font-medium ${navItems[0] === navItem ? "text-primary" : "text-text"}`}
              href=""
            >
              {navItem}
            </a>
          );
        })}
      </nav>
      <button className=" bg-primary py-2 px-3 text-primary-text rounded-md">
        Get Started
      </button>
    </header>
  );
}

export default Header;
