import { useState } from "react";

function MenuIcon() {
  return (
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
      class="lucide lucide-menu icon menu"
    >
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

function App() {
  // const [var, func] = useState();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main className="p-6">
      <div className="flex flex-col gap-3">
        <button
          className="w-fit bg-gray-200 border py-2 px-4"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          <MenuIcon />
        </button>
        {showMenu ? (
          <div className="w-100 flex flex-col bg-gray-200 border border-text divide-y">
            <a href="" className="p-3">
              home
            </a>
            <a href="" className="p-3">
              about
            </a>
            <a href="" className="p-3">
              services
            </a>
            <a href="" className="p-3">
              blog
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
