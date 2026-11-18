export const DUMMY_FAQ_DATA = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library used to build user interfaces by breaking UI into reusable components. It helps manage dynamic data efficiently and updates the UI without reloading the page using its Virtual DOM approach.",
  },
  {
    id: 2,
    title: "What is useState?",
    content:
      "useState is a React Hook that allows functional components to store and manage internal state. It returns a state variable and a setter function which triggers re-render whenever the state updates.",
  },
  {
    id: 3,
    title: "What is a Hook?",
    content:
      "Hooks are special functions introduced in React that let you use state and lifecycle features in functional components without writing class components.",
  },
  {
    id: 4,
    title: "What is Virtual DOM?",
    content:
      "The Virtual DOM is a lightweight copy of the real DOM that React uses to detect changes efficiently. Instead of updating the entire DOM, React compares differences and updates only the necessary parts.",
  },
  {
    id: 5,
    title: "What is component re-render?",
    content:
      "A component re-renders whenever its state or props change. React updates the Virtual DOM first and then efficiently reflects only necessary changes in the actual DOM.",
  },
  {
    id: 6,
    title: "What is state vs props?",
    content:
      "State is data managed within a component while props are values passed from parent to child components. Props are read-only whereas state can be updated internally.",
  },
];