import { headerContent } from "../content";
import logo from "../images/logo.png";

const navItems = headerContent.navigation;

function Navbar() {
  return (
    <div className="nav flex gap-10  text-text ">
      {navItems.map((navItem) => {
        return (
          <a key={navItem} href="" className="text-text font-semibold">
            {navItem}
          </a>
        );
      })}
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-between items-center w-full text-text px-60 py-4 bg-bg">
      <div className="w-44">
        <img src={logo} alt="" className="w-full object-cover"></img>
      </div>
      <div className=" flex gap-3">
        <Navbar />
      </div>
      <button className="">Training Schedule</button>
    </header>
  );
}
export default Header;
