import GrandChild from "./GrandChild";

const ChildOne = ({ count }) => {
  return (
    <section className="child-one-section">
      <h3>ChildOne</h3>
      <p>{count}</p>
      <GrandChild count={count} />
    </section>
  );
};

export default ChildOne;
