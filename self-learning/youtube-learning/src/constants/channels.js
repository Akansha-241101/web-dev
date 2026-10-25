export const channels = [
  {
    id: "theavocoder",
    priority: 4,
    name: "theavocoder",
    handle: "@theavocoder",
    url: "https://www.youtube.com/@theavocoder",
    focus: "JS with drawings",
    overview:
      "Open this when map, promises, or “how does JS run?” feels fuzzy. Short visual videos that draw the idea so it finally clicks.",
    tags: ["JavaScript", "Internals", "Visual Learning"],
  },
  {
    id: "manuarora",
    priority: 2,
    name: "Manu Arora",
    handle: "@manuarora",
    url: "https://www.youtube.com/@manuarora",
    focus: "Make UI prettier",
    overview:
      "For when your React app works but looks plain. Manu shows spacing, layout, and modern UI taste so screens like ShopNow start looking nicer.",
    tags: ["UI Design", "Frontend", "React"],
  },
  {
    id: "roadsidecoder",
    priority: 1,
    name: "RoadsideCoder",
    handle: "@RoadsideCoder",
    url: "https://www.youtube.com/@RoadsideCoder",
    focus: "Crack interviews",
    overview:
      "Interview-style practice for React and JavaScript — common questions and small coding tasks. Use this when you want to revise what you already know out loud.",
    tags: ["Interview Prep", "Frontend", "JavaScript", "React"],
  },
  {
    id: "pedrotechnologies",
    priority: 3,
    name: "PedroTech",
    handle: "@PedroTechnologies",
    url: "https://www.youtube.com/@PedroTechnologies",
    focus: "Build React apps",
    overview:
      "Follow-along React tutorials (components, hooks, small apps). Nice after days 12–22 when you want another project to build beside the video.",
    tags: ["React", "Tutorials", "Projects"],
  },
  {
    id: "sheryians",
    priority: 5,
    name: "Sheryians Coding School",
    handle: "@sheryians",
    url: "https://www.youtube.com/@sheryians",
    focus: "Practice by building",
    overview:
      "Hands-on JavaScript and frontend coding, explained simply. Pick this when you want to practice building, not sit through heavy theory.",
    tags: ["JavaScript", "Frontend", "Projects"],
  },
  {
    id: "webdevsimplified",
    priority: 6,
    name: "Web Dev Simplified",
    handle: "@WebDevSimplified",
    url: "https://www.youtube.com/@WebDevSimplified",
    focus: "Neater React & JS",
    overview:
      "Short, clear React and JS tips that make your code neater. Great after useState, fetch, and Context when you want fewer messy patterns.",
    tags: ["JavaScript", "React", "Clean Code", "Tutorials"],
  },
  {
    id: "akshaymarch7",
    priority: 7,
    name: "Akshay Saini",
    handle: "@akshaymarch7",
    url: "https://www.youtube.com/@akshaymarch7",
    focus: "How JS really works",
    overview:
      "Namaste JavaScript — closures, promises, and how JS works under the hood, taught slowly. Best revision after your day 8–10 and 23–25 practice.",
    tags: ["JavaScript", "Internals", "Interview Prep"],
  },
  {
    id: "greatstackdev",
    priority: 8,
    name: "GreatStack",
    handle: "@GreatStackDev",
    url: "https://www.youtube.com/@GreatStackDev",
    focus: "Big project builds",
    overview:
      "Long React / full-app builds with source code to follow. Perfect when you’re ready for Project 1 and want one big project from start to finish.",
    tags: ["Projects", "React", "Full Stack", "Tutorials"],
  },
  {
    id: "codegrid",
    priority: 9,
    name: "Codegrid",
    handle: "@codegrid",
    url: "https://www.youtube.com/@codegrid",
    focus: "Cool UI animations",
    overview:
      "Website animations with GSAP (smooth motion, cool hover and scroll effects). Level up after your day-21 carousel when you want prettier UI movement.",
    tags: ["Animation", "GSAP", "Frontend"],
  },
  {
    id: "fireship",
    priority: 10,
    name: "Fireship",
    handle: "@Fireship",
    url: "https://www.youtube.com/@Fireship",
    focus: "Fast tool explainers",
    overview:
      "Super short videos that explain a new tool or idea fast. Watch when you’re curious “what else exists?” but don’t want a long tutorial.",
    tags: ["Tech News", "Shorts", "Frontend"],
  },
  {
    id: "varunmayya",
    priority: 11,
    name: "Varun Mayya",
    handle: "@VarunMayya",
    url: "https://www.youtube.com/@VarunMayya",
    focus: "AI & tech trends",
    overview:
      "Talks about AI, startups, and what’s changing in tech — not a coding class. Light watch so trends don’t feel scary or confusing.",
    tags: ["Tech News", "AI", "Career"],
  },
  {
    id: "ezcommit",
    priority: 12,
    name: "ezcommit",
    handle: "@ezcommit",
    url: "https://www.youtube.com/@ezcommit",
    focus: "Motivation boost",
    overview:
      "Short clips on motivation, jobs, and discipline. Open on tired days when you need a push — not for learning a new React topic.",
    tags: ["Motivation", "Career", "Shorts"],
  },
  {
    id: "shadeofcode",
    priority: 13,
    name: "Shade of Code",
    handle: "@Shadeofcode",
    url: "https://www.youtube.com/@Shadeofcode",
    focus: "Fun coding shorts",
    overview:
      "Meme-style shorts about coding habits and mindset. Fun, low-pressure watch when you want a break but still feel like a developer.",
    tags: ["Shorts", "Motivation", "Career"],
  },
  {
    id: "codevolution",
    priority: 14,
    name: "Codevolution",
    handle: "@codevolution",
    url: "https://www.youtube.com/@codevolution",
    focus: "Revise React slowly",
    overview:
      "Clear step-by-step React and JS playlists. Use this to revise hooks, Router, or any topic you already touched but want explained again slowly.",
    tags: ["React", "Tutorials", "JavaScript"],
  },
  {
    id: "compilefuture",
    priority: 15,
    name: "Compile Future",
    handle: "@CompileFuture",
    url: "https://www.youtube.com/@CompileFuture",
    focus: "AI & tech trends",
    overview:
      "Talks about AI, and what’s changing in tech — not a coding class. Light watch so trends don’t feel scary or confusing. Also shows how to get free AI models.",
    tags: ["Tech News", "AI", "Career"],
  }
];

export const allTags = [
  ...new Set(channels.flatMap((channel) => channel.tags)),
].sort((a, b) => a.localeCompare(b));
