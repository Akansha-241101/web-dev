import { Outlet } from "react-router-dom";
import Header from "@/components/home/Header";

function App() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}

export default App;
