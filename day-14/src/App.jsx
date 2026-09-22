// imports here
import PetsAC from "./components/PetsAC";
import { pets } from "./content/contentDetail";

function App() {
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-5">
        {pets.map((pet) => {
          return (
            <PetsAC
              image={pet.image}
              name={pet.name}
              type={pet.type}
              age={pet.age}
              location={pet.location}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
