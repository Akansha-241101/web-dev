export const homeCopy = {
  eyebrow: "Foundation review",
  title: "Color palette & design principles",
  description: "Confirm tokens, type, and rules before we build product UI.",
  palette: {
    title: "Brand palette",
    description:
      "Core tokens shared across themes. Surface values shift in light mode; brand hues stay fixed.",
  },
  typography: {
    label: "Typography — Convergence",
    sampleHeading: "Shop premium kicks",
    sampleSubheading: "Clean retail UI with one expressive sans.",
    sampleBody:
      "Body copy stays readable on both canvases. Use size steps for hierarchy — avoid mixing display fonts.",
  },
  icons: {
    label: "Icons — Lucide React",
    description:
      "Outline icons only. Prefer label + icon for cart, search, and stock states.",
  },
  components: {
    title: "Components smoke test",
  },
  principles: {
    title: "Foundational principles",
    description:
      "Rules we'll follow when building pages. Say if any should change before we continue.",
  },
  footer:
    "Toggle theme above, then confirm palette + principles to move into product UI.",
} as const;

export const shopCopy = {
  logoAlt: "ShopNow",
  eyebrow: "ShopNow collection",
  title: "Find your next favorite pair",
  searchPlaceholder: "Search...",
  addToCart: "Add to Cart",
  cartTitle: "Cart",
  cartEmpty: "Your cart is empty",
  wishlistTitle: "Wishlist",
  wishlistEmpty: "Your wishlist is empty",
  remove: "Remove",
} as const;
