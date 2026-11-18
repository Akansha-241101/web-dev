import { headerContent } from "../constants/content";
import logo from "../assets/images/logo.png";
import { Menu } from "reicon-react";
import { useState } from "react";

const navItems = headerContent.navigation;

function Navbar() {
  return (
    <div className="nav flex flex-col lg:flex-row gap-6 lg:gap-10 text-text/75 p-6">
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
    <header className="relative flex justify-between items-center w-full text-text font-Montserrat font-medium text-l px-6 lg:px-40 py-4 border-b border-border/40">
      <div className="w-44">
        <img src={logo} alt="" className="w-full object-cover"></img>
      </div>
      <div className="hidden lg:flex gap-3">
        <Navbar />
      </div>
      <button className="hidden lg:flex px-5 py-2 bg-text text-bg rounded-sm">
        Training Schedule
      </button>
      <Menu className="block lg:hidden cursor-pointer" />
    </header>
  );
}
export default Header;
