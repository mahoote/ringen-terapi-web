import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../button/button.style";
import { NavbarLinkStyled, NavbarLinkUnderlineStyled } from "./header.style";
import { TextStyled } from "../text/text.style";
import { standardColors } from "../../palettes/standardColors.style";
import { MenuBurgerStyled } from "../menuBurger/menuBurger.style";
import { MobileMenuStyled } from "../mobileMenu/mobileMenu.style";

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
            borderWidth={"3px"}
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

  function handleOnclick() {
    setShowMobileMenu(!showMobileMenu);
  }

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
              sizeTouch={4}
            />
          </Link>

          <MenuBurgerStyled onClick={handleOnclick} />
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            {props.items.map((item, i) => (
              <NavbarItem key={i} item={item} itemSize={props.itemSize} />
            ))}
          </div>
        </div>
      </nav>
      <MobileMenuStyled items={props.items} showMenu={showMobileMenu} />
    </div>
  );
}

export { Header, NavbarLink, NavbarLinkUnderline };
