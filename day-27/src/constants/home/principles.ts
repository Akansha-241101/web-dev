export const principles = [
  {
    title: "Dark-first retail",
    body: "Default to deep charcoal surfaces. Light mode inverts the canvas while keeping the same brand hues.",
  },
  {
    title: "Amber leads action",
    body: "Primary (#FBA101) is the only loud accent — used for buy, cart, and focus. Everything else stays quieter.",
  },
  {
    title: "One job per color",
    body: "Red = risk/sale. Green = trust/stock. Blue = info. Muted gray = unavailable. Don't repurpose them.",
  },
  {
    title: "Convergence type",
    body: "A single Google Font family for UI copy. Hierarchy comes from size and weight, not mixed typefaces.",
  },
  {
    title: "Lucide icons only",
    body: "Outline icons from lucide-react. Keep stroke consistent; pair with clear labels for commerce actions.",
  },
  {
    title: "Surface before chrome",
    body: "Background → card → content. Borders stay subtle; color and spacing do the hierarchy work.",
  },
] as const

export type Principle = (typeof principles)[number]
