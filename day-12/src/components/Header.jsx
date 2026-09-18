function Header() {
  return (
    <header className="header flex p-section py-6 justify-between">
      <div className="logo text-[22px] font-semibold ">StudyHub</div>
      <nav className="nav flex gap-10 ">
        <a className="text-primary font-medium" href="">
          Home
        </a>
        <a href="">Features</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <button className=" bg-primary py-2 px-3 text-primary-text rounded-md">
        Get Started
      </button>
    </header>
  );
}

export default Header;
