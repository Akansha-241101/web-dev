import { useState } from "react";
import logo from "../assets/logo.png";
import { headerContent } from "../constants/content";

const headerNav = headerContent.navigation;
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <header className="relative flex justify-between items-center px-4 lg:px-40 py-4">
      {showMenu && (
        <div className="flex flex-col absolute top-full left-0 bg-bg-soft">
          <nav className="flex flex-col justify-center w-screen border-text/40  border-y divide-text/40 divide-y">
            {headerNav.map((navItem) => {
              return (
                <a key={navItem} href="" className="px-6 py-3">
                  {navItem}
                </a>
              );
            })}
          </nav>
          <button className="px-6 py-2 w-auto sm:w-fit rounded-md m-4 bg-text text-bg cursor-pointer hover:bg-text/90">
            Training Schedule
          </button>
        </div>
      )}
      <div className="w-45">
        <img src={logo} alt="" className="w-full object-cover" />
      </div>
      <nav className="gap-4 hidden lg:flex">
        {headerNav.map((navItem) => {
          return (
            <a key={navItem} href="">
              {navItem}
            </a>
          );
        })}
      </nav>
      <button
        className="lg:hidden"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
      <button className="px-6 py-2 rounded-md bg-text text-bg cursor-pointer hover:bg-text/90 hidden lg:block">
        Training Schedule
      </button>
    </header>
  );
}
