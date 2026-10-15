export const channels = [
  {
    id: "theavocoder",
    priority: 4,
    name: "theavocoder",
    handle: "@theavocoder",
    url: "https://www.youtube.com/@theavocoder",
    focus: "Visual JS",
    overview:
      "Revise JavaScript visually — perfect when array methods, hooks, or async concepts feel abstract.",
    tags: ["Visual Learning", "Javascript", "Revision"],
  },
  {
    id: "manuarora",
    priority: 2,
    name: "Manu Arora",
    handle: "@manuarora",
    url: "https://www.youtube.com/@manuarora",
    focus: "Design taste",
    overview:
      "Improve UI/UX taste for your React screens — layout, spacing, and modern frontend design sense.",
    tags: ["Indian", "frontend", "Design", "Ui-Ux"],
  },
  {
    id: "roadsidecoder",
    priority: 1,
    name: "RoadsideCoder",
    handle: "@RoadsideCoder",
    url: "https://www.youtube.com/@RoadsideCoder",
    focus: "Interview prep",
    overview:
      "Turn your frontend + JS learning into interview-ready practice: projects, revision, and common questions.",
    tags: ["frontend", "projects", "interview prep", "javascript"],
  },
  {
    id: "pedrotechnologies",
    priority: 3,
    name: "PedroTech",
    handle: "@PedroTechnologies",
    url: "https://www.youtube.com/@PedroTechnologies",
    focus: "React builds",
    overview:
      "Practice the React components, props, and project structure you learned in days 12–17 with guided tutorials.",
    tags: ["tutorials", "projects", "frontend"],
  },
  {
    id: "sheryians",
    priority: 5,
    name: "Sheryians Coding School",
    handle: "@sheryians",
    url: "https://www.youtube.com/@sheryians",
    focus: "Dev craft",
    overview:
      "Keep building JavaScript and development habits on top of your foundation — practical coding, not just theory.",
    tags: ["development", "javascript"],
  },
  {
    id: "webdevsimplified",
    priority: 6,
    name: "Web Dev Simplified",
    handle: "@WebDevSimplified",
    url: "https://www.youtube.com/@WebDevSimplified",
    focus: "Cleaner code",
    overview:
      "Level up how you write React and JS after useState, fetch, and Context — clearer patterns, less messy code.",
    tags: ["senior development", "tech updates"],
  },
  {
    id: "akshaymarch7",
    priority: 7,
    name: "Akshay Saini",
    handle: "@akshaymarch7",
    url: "https://www.youtube.com/@akshaymarch7",
    focus: "JS depth",
    overview:
      "Strengthen the JavaScript you started in days 8–10 and 23–25 — closures, execution context, and how JS really works under the hood.",
    tags: ["Javascript mastery"],
  },
  {
    id: "greatstackdev",
    priority: 8,
    name: "GreatStack",
    handle: "@GreatStackDev",
    url: "https://www.youtube.com/@GreatStackDev",
    focus: "Full projects",
    overview:
      "Build longer end-to-end projects using the HTML, CSS, JS, and React skills you already have.",
    tags: ["Project Ideas", "Tutorials", "Long Videos"],
  },
  {
    id: "codegrid",
    priority: 9,
    name: "Codegrid",
    handle: "@codegrid",
    url: "https://www.youtube.com/@codegrid",
    focus: "UI motion",
    overview:
      "Take your day-21 carousel, hover, and transition work further with GSAP and polished animation patterns.",
    tags: ["Animations", "GSAP"],
  },
  {
    id: "fireship",
    priority: 10,
    name: "Fireship",
    handle: "@Fireship",
    url: "https://www.youtube.com/@Fireship",
    focus: "Quick briefs",
    overview:
      "Short videos to understand new tools fast — useful after Context and fetch when you wonder “what else exists?”",
    tags: ["Short Videos", "Tech updates"],
  },
  {
    id: "varunmayya",
    priority: 11,
    name: "Varun Mayya",
    handle: "@VarunMayya",
    url: "https://www.youtube.com/@VarunMayya",
    focus: "Tech radar",
    overview:
      "Stay aware of new tools and trends after your React basics, so you know what to explore next without getting lost.",
    tags: ["tech updates", "explore", "learn"],
  },
  {
    id: "ezcommit",
    priority: 12,
    name: "ezcommit",
    handle: "@ezcommit",
    url: "https://www.youtube.com/@ezcommit",
    focus: "Stay motivated",
    overview:
      "Light motivation and tech updates for days when you need energy to keep going after long practice sessions.",
    tags: ["tech updates", "motivation", "explore"],
  },
  {
    id: "shadeofcode",
    priority: 13,
    name: "Shade of Code",
    handle: "@Shadeofcode",
    url: "https://www.youtube.com/@Shadeofcode",
    focus: "Fun revision",
    overview:
      "Light, meme-style shorts for easy revision of things you already studied — low pressure, high recall.",
    tags: ["Meme Learning", "Fun", "Short Videos"],
  },
];

export const allTags = [
  ...new Set(channels.flatMap((channel) => channel.tags)),
].sort((a, b) => a.localeCompare(b));
