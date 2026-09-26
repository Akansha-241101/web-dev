import { headerContent } from "../content";
import logo from "../images/logo.png";

const navItems = headerContent.navigation;

function Navbar() {
  return (
    <div className="nav flex gap-10  text-text/75">
      {navItems.map((navItem) => {
        return (
          <a key={navItem} href="">
            {navItem}
          </a>
        );
      })}
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-between items-center w-full text-text font-Montserrat font-medium text-l px-40 py-4 bg-bg border-b border-black/25">
      <div className="w-44">
        <img src={logo} alt="" className="w-full object-cover"></img>
      </div>
      <div className=" flex gap-3">
        <Navbar />
      </div>
      <button className=" px-4.5 py-3 bg-text text-bg rounded-sm">
        Training Schedule
      </button>
    </header>
  );
}
export default Header;
