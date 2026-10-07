/* Toggle effect  */

import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  const handlerturn = () => {
    setIsOn((prev) => !prev);
  };
  console.log(isOn);

  return (
    <section className={`toggle-panel ${isOn ? "is-on" : "is-off"}`}>
      <h2 className="toggle-status">
        Status <span>{isOn ? "ON" : "OFF"}</span>
        <button className="toggle-button" onClick={handlerturn}>
          {isOn ? "[ Turn OFF ]" : "[ Turn ON ]"}
        </button>
      </h2>
    </section>
  );
}

export default App;
