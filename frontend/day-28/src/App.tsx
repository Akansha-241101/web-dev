interface Person {
  name: string;
}

const person: Person = {
  name: "Akshu",
};
console.log(person);

type MyName = string;
const myName: MyName = "Akshu";

console.log(myName);

function App() {
  return (
    <main className="main-content">
      <h1>Hi Akshu</h1>
    </main>
  );
}

export default App;
