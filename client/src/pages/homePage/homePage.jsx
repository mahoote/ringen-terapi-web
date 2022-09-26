import React from "react";
import { HeaderStyled } from "../../components/header/header.style";
import { GlobalStyle } from "../../components/globals/global.style";
import { GridStyled } from "../../components/grids/grid.style";

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
  return (
    <GridStyled
      content={
        <>
          <GlobalStyle />
          <HeaderStyled items={navbarItems} itemSize={5} />
        </>
      }
    />
  );
}

export { HomePage };
