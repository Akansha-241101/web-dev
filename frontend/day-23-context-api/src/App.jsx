import Button from "./components/Button";
import useTheme from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Context API Demo</h1>
      <Button />
    </div>
  );
}
