import React from "react";
import { HeaderStyled } from "../../components/header/header.style";

const navbarItems = [
  { name: "Om meg", link: "about", type: "text" },
  { name: "Tjenester", link: "services", type: "text" },
  {
    name: "Priser",
    link: "prices",
    type: "text",
    items: [
      { name: "Individuell", link: "prices", type: "text" },
      { name: "Familie", link: "prices", type: "text" },
      { name: "Arbeidsplass", link: "prices", type: "text" },
    ],
  },
  { name: "Ta en prat", link: "contact", type: "button" },
];

function HomePage() {
  return <HeaderStyled items={navbarItems} />;
}

export { HomePage };
