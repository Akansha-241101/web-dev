/* target UI, Counter with -1, Reset, and +1 buttons  */

import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const handlerDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handlerReset = () => {
    setCount(0);
  };

  const handlerIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="buttons border border-black p-20 flex gap-6 justify-center">
      <h1 className="text-3xl font-semibold">{count}</h1>
      <button
        className="decrement border border-black px-2 py-2 bg-gray/50"
        onClick={handlerDecrement}
      >
        -
      </button>
      <button
        className="reset border border-black px-2 py-2 bg-gray/50"
        onClick={handlerReset}
      >
        Reset
      </button>
      <button
        className="increment border border-black px-2 py-2 bg-gray/50"
        onClick={handlerIncrement}
      >
        +
      </button>
    </div>
  );
}

export default Count;
