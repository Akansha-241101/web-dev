import { useState } from "react";
import MenuIcon from "./components/MenuIcon";

function App() {

  // const [var, func] = useState();
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="p-6">
      <div className="flex flex-col gap-3">

        {/* -------------------- count increment and reset using useState ---------------- */}

        {/* Count display */}
        <h1 className="text-3xl">{count}</h1>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="w-fit bg-gray-200 border py-2 px-4 cursor-pointer"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Inc count
          </button>
          <button
            className="w-fit bg-gray-200 border py-2 px-4 cursor-pointer"
            onClick={() => setCount(0)}
          >
            reset count
          </button>
        </div>

        {/* -------------------- Menu show and hide using useState ---------------- */}

        {/* Menu toggle button */}
        <button
          className="w-fit bg-gray-200 border py-2 px-4 cursor-pointer"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          {/*  Menu SVG icon component */}
          <MenuIcon />
        </button>

        {/* Conditionally display the menu */}
        {showMenu ? (
          <div className="w-100 flex flex-col bg-gray-200 border border-text divide-y">
            <a href="" className="p-3">
              Home
            </a>
            <a href="" className="p-3">
              About
            </a>
            <a href="" className="p-3">
              Aervices
            </a>
            <a href="" className="p-3">
              Blog
            </a>
            <a href="" className="p-3">
              contact
            </a>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
