import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const buttonStyles =
    "px-3 py-2 border rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200";
  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">{count}</h1>
      <div className="flex gap-4">
        <button
          className={buttonStyles}
          onClick={() => {
            setCount((prev) => {
              return prev + 1;
            });
          }}
        >
          INC count
        </button>
        <button
          className={buttonStyles}
          onClick={() => {
            setCount(0);
          }}
        >
          RESET count
        </button>
        <button
          className={buttonStyles}
          onClick={() => {
            setCount((prev) => (prev > 0 ? prev - 1 : prev));
          }}
        >
          DEC count
        </button>
      </div>
    </div>
  );
};
export default App;
