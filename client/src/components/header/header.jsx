import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonStyled } from "../button/button.style";
import { NavbarLinkStyled, NavbarLinkUnderlineStyled } from "./header.style";
import { TextStyled } from "../text/text.style";
import { standardColors } from "../../palettes/standardColors.style";
import { MenuBurgerStyled } from "../menuBurger/menuBurger.style";
import {
  MobileMenuGlobalStyle,
  MobileMenuStyled,
} from "../mobileMenu/mobileMenu.style";
import { size } from "../../sizes/screenSize.style";
import { useResize } from "../../hooks/screenDetection";

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

function NavbarLinkUnderline(props) {
  return <span className={props.className}></span>;
}

function NavbarLink(props) {
  return (
    <Link className={props.className + " navbar-item "} to={props.link}>
      {props.content}
      <NavbarLinkUnderlineStyled />
    </Link>
  );
}

function NavbarItem(props) {
  const item = props.item;

  if (item.type === "text" && item.items === undefined) {
    return (
      <NavbarLinkStyled
        link={item.link}
        type={item.type}
        content={<TextStyled text={item.name} size={props.itemSize} />}
      />
    );
  } else if (item.type === "text" && item.items !== undefined) {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <NavbarLinkStyled
          link={item.link}
          type={item.type}
          content={<TextStyled text={item.name} size={props.itemSize} />}
        />

        <div className="navbar-dropdown">
          {item.items.map((item, i) => (
            <NavbarItem key={i} item={item} itemSize={props.itemSize} />
          ))}
        </div>
      </div>
    );
  } else if (item.type === "button") {
    return (
      <NavbarLinkStyled
        link={item.link}
        type={item.type}
        content={
          <ButtonStyled
            text={item.name}
            borderWidth={"2.3px"}
            textSize={props.itemSize}
          />
        }
      />
    );
  }

  return null;
}

function Header(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  function handleOnclick() {
    setShowMobileMenu(!showMobileMenu);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showMobileMenu]);

  useEffect(() => {
    return () => {
      setShowMobileMenu(false);
    };
  }, [location]);

  function handleResize() {
    // Only show video if the screen is large enough.
    if (window.innerWidth >= size.laptop) {
      setShowMobileMenu(false);
    }
  }
  useResize(handleResize);

  return (
    <div>
      <nav
        className={props.className + " navbar "}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand is-align-items-center">
          <Link to={"/"}>
            <TextStyled
              text={"Ringen Terapi"}
              color={standardColors.green1}
              textWeight={"semibold"}
              size={2}
              sizeTouch={3}
            />
          </Link>

          <MenuBurgerStyled onClick={handleOnclick} showMenu={showMobileMenu} />
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            {navbarItems.map((item, i) => (
              <NavbarItem key={i} item={item} itemSize={5} />
            ))}
          </div>
        </div>
      </nav>
      {showMobileMenu ? <MobileMenuGlobalStyle /> : null}
      <MobileMenuStyled items={navbarItems} showMenu={showMobileMenu} />
    </div>
  );
}

export { Header, NavbarLink, NavbarLinkUnderline };
