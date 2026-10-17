export const brandColors = [
  {
    name: "Primary",
    token: "--primary",
    hex: "#FBA101",
    role: "CTAs, highlights, focus rings",
    swatch: "bg-primary text-primary-foreground",
  },
  {
    name: "Red",
    token: "--red",
    hex: "#8A201F",
    role: "Destructive actions, sale accents",
    swatch: "bg-red text-white",
  },
  {
    name: "Green",
    token: "--green",
    hex: "#0E3F33",
    role: "Success, in-stock, secondary",
    swatch: "bg-green text-white",
  },
  {
    name: "Blue",
    token: "--blue",
    hex: "#0F2D5C",
    role: "Info, links, accent surfaces",
    swatch: "bg-blue text-white",
  },
  {
    name: "Out of stock",
    token: "--out-of-stock",
    hex: "#2A3038",
    role: "Muted / unavailable states",
    swatch: "bg-out-of-stock text-white",
  },
  {
    name: "Card",
    token: "--card",
    hex: "#0F0F0F",
    role: "Elevated surfaces (dark)",
    swatch: "bg-card text-card-foreground border border-border",
  },
  {
    name: "Background",
    token: "--background",
    hex: "#070707",
    role: "Page canvas (dark)",
    swatch: "bg-background text-foreground border border-border",
  },
] as const

export type BrandColor = (typeof brandColors)[number]
