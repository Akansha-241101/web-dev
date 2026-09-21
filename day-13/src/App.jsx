function Button({ text }) {
  return (
    <button className="bg-purple-600 text-white px-3 py-2 rounded-md">
      {text}
    </button>
  );
}

// function Button(props) {
//   return (
//     <button className="bg-purple-600 text-white px-3 py-2 rounded-md">
//       {props.text}
//     </button>
//   );
// }

function Card(props) {
  return (
    <article className="bg-gray-200 text-black p-4 flex flex-col gap-2 border border-gray-400">
      <p>{props.imageUrl}</p>
      <p>{props.title}</p>
      <p>{props.price}</p>
      <p>{props.rating}</p>
      <p>{props.quantity}</p>
    </article>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="bg-purple-200 text-7xl text-black flex justify-center items-center">
        Assalamwalikum
      </h1>
      <div className="flex gap-3">
        <Button text="Get Started" />
        <Button text="Explore Features" />
        <Button text="akdfbadub" />
        <Card
          imageUrl="./images/image-1.png"
          title="Card 1"
          price={20}
          rating="4.00"
          quantity={3}
        />
        <Card
          imageUrl="./images/image-2.png"
          title="Card 2"
          price={30}
          rating="5.00"
          quantity={1}
        />
      </div>
    </div>
  );
}
export default App;
