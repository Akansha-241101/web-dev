import useTheme from "../context/ThemeContext";

export default function Button() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      Current: {theme}
    </button>
  );
}
