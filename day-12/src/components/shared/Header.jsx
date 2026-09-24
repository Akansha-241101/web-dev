import { headerContent } from "../../constants/websiteContent";

const navItems = headerContent.navigation;

function Navbar() {
  return (
    <nav className="nav gap-10 hidden lg:flex">
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
  );
}

function Header() {
  return (
    <header className="header flex p-6 lg:p-section py-6 justify-between">
      <div className="logo text-[22px] font-semibold">{headerContent.logo}</div>
      <Navbar />
      <button className="bg-primary py-2 px-6 text-primary-text rounded-md hidden lg:block">
        {headerContent.button}
      </button>
      <button className="w-fit bg-black-700">




// <button
          className="w-fit bg-gray-200 border py-2 px-4 cursor-pointer"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          {/*  Menu SVG icon component */}
          <MenuIcon />
        </button>






        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu lg:hidden"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
    </header>
  );
}

export default Header;
