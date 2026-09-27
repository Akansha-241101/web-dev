const content = [
  {
    id: 1,
    tab: "tab1",
    heading: "Heading for Tab 1",
    description:
      "Add your primary content or description for the first tab here.",
    secondaryText:
      "Additional information can be displayed alongside the main content.",
    image: "assets/images/img-1.avif",
    buttonText: "Learn More",
  },
  {
    id: 2,
    tab: "tab2",
    heading: "Heading for Tab 2",
    description:
      "Add your primary content or description for the second tab here.",
    secondaryText:
      "Additional information can be displayed alongside the main content.",
    image: "assets/images/img-2.avif",
    buttonText: "Learn More",
  },
  {
    id: 3,
    tab: "tab3",
    heading: "Heading for Tab 3",
    description:
      "Add your primary content or description for the third tab here.",
    secondaryText:
      "Additional information can be displayed alongside the main content.",
    image: "assets/images/img-3.avif",
    buttonText: "Learn More",
  },
  {
    id: 4,
    tab: "tab4",
    heading: "Heading for Tab 4",
    description:
      "Add your primary content or description for the fourth tab here.",
    secondaryText:
      "Additional information can be displayed alongside the main content.",
    image: "assets/images/img-4.avif",
    buttonText: "Learn More",
  },
];

export const tabs = content.map((tab) => tab.heading);

export default content;
