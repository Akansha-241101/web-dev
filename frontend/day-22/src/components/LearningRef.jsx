import { useRef } from "react";

function Search() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  
  console.log("rendered");
  return (
    <>
      <input ref={inputRef} placeholder="Search..." />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

const LearningRef = () => {
  return <Search />;
};

export default LearningRef;
