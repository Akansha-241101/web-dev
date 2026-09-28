import webDevImage from "../assets/images/img-1.avif";
import reactDevImage from "../assets/images/img-2.avif";
import nodeImage from "../assets/images/img-3.avif";
import uiImage from "../assets/images/img-4.avif";

const content = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, and modern web development from the fundamentals to advanced concepts. Build responsive, accessible, and interactive websites while understanding how browsers and web technologies work together.",
    image: webDevImage,
    buttonText: "Explore Course",
  },

  {
    id: 2,
    title: "React Development",
    description:
      "Build modern and interactive web applications using React and its powerful ecosystem. Learn components, props, state, hooks, routing, API integration, and state management while following practical development patterns.",
    image: reactDevImage,
    buttonText: "Explore Course",
  },

  {
    id: 3,
    title: "Node.js & Express",
    description:
      "Learn backend development using Node.js and Express to build scalable and reliable web applications. Work with REST APIs, authentication, databases, middleware, error handling, and real-world server-side development practices.",
    image: nodeImage,
    buttonText: "Explore Course",
  },

  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Learn the fundamentals of UI and UX design to create intuitive, accessible, and visually appealing digital products. Understand user research, wireframing, layouts, typography, color systems, design principles, and practical design workflows.",
    image: uiImage,
    buttonText: "Explore Course",
  },
];

export const courses = content.map((c) => c.title);

export default content;
