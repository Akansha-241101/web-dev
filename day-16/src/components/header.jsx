import { headerContent } from "../content";
import logo from "../images/logo.png";

const navItems = headerContent.navigation;

function Navbar() {
  return (
    <div className="nav flex gap-10  text-text border-2 ">
      {navItems.map((navItem) => {
        return (
          <a key={navItem} href="" className="flex p-3 gap-3 text-text">
            {navItem}
          </a>
        );
      })}
    </div>
  );
}

function Header() {
  return (
    <header className="w-fit text-text px-3 py-8 bg-bg-soft">
      <img src={logo} alt="" className="w-full"></img>
      <div>
        <Navbar />
      </div>
      <button>Training Schedule</button>
    </header>
  );
}
export default Header;
