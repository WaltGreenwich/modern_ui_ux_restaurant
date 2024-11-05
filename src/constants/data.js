import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle:
      "Celebrating Gericht's dedication to quality and affordability with fresh ingredients and authentic flavors.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle:
      "Recognized as a promising restaurant for innovation and freshness in modern gastronomy.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle:
      "Awarded for outstanding hospitality and a welcoming atmosphere, providing a unique dining experience.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle:
      "Honoring our head chef's creativity and culinary mastery in transforming each dish into an experience.",
  },
];

export default { wines, cocktails, awards };
