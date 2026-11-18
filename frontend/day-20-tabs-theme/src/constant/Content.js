import beautyImage from "../assets/beautynotes.jpg";
import selfCareImage from "../assets/self-care.jpg";
import personalStyle from "../assets/personalStyle.jpg";
import littleJoysImage from "../assets/littlejoy.jpg";

const content = [
  {
    id: 1,
    title: "Beauty Notes",
    eyebrow: "YOUR DAILY GLOW",
    description:
      "Find the little routines that help you feel like yourself. Explore easy skincare ideas, thoughtful product picks, and simple tips for a beauty ritual that feels completely yours. Learn how to build a routine that fits your day, discover small ways to care for your skin, and make time for moments that leave you feeling refreshed and confident.",
    image: beautyImage,
    buttonText: "Find Your Glow",
  },
  {
    id: 2,
    title: "Personal Style",
    eyebrow: "STYLE THAT FEELS LIKE YOU",
    description:
      "Build a wardrobe around the colors, shapes, and pieces you love. Get outfit inspiration and practical ideas for making your everyday style feel more like you. Discover simple ways to mix and match your favorite clothes, choose pieces that work for your lifestyle, and feel comfortable expressing your personality through what you wear.",
    image: personalStyle,
    buttonText: "Explore Your Style",
  },
  {
    id: 3,
    title: "Self-Care",
    eyebrow: "MAKE SPACE FOR YOURSELF",
    description:
      "Make room for small moments that help you feel refreshed. Find gentle routines, cozy ideas, and simple ways to bring a little more care into your day. Whether you have a few minutes or a quiet afternoon, explore ideas for slowing down, recharging your energy, and making your well-being part of your everyday routine.",
    image: selfCareImage,
    buttonText: "Take a Moment",
  },
  {
    id: 4,
    title: "Little Joys",
    eyebrow: "LITTLE THINGS, BIG JOY",
    description:
      "Celebrate the details that brighten an ordinary day, from a pretty desk refresh to a new playlist or a creative weekend project. Find inspiration for adding more joy to your routine. Try small activities that spark creativity, make your space feel more inviting, or give you something fun to look forward to during the week.",
    image: littleJoysImage,
    buttonText: "Find Your Happy",
  },
];
export const contentDetail = content.map((item) => item.title);
export default content;

