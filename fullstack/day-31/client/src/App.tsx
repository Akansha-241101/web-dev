import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Car {
  id: number;
  name: string;
  color: string;
}

function App() {
  const { data, isPending, error } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/cars");
      return res.data;
    },
  });

  console.log(data);
  return (
    <main className="main-content">
      <h1 style={{ marginBottom: "8px" }}>Hi</h1>
      {error && <h1>Error</h1>}
      {isPending ? (
        <h1>Loading ....</h1>
      ) : (
        data.map((car: Car) => (
          <article key={car.id} style={{ display: "flex", gap: "4px" }}>
            <p>{car.name}</p>
            <p>{car.color}</p>
          </article>
        ))
      )}
    </main>
  );
}

export default App;
