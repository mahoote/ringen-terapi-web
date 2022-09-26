import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../button/button.style";
import { NavbarLinkStyled, NavbarLinkUnderlineStyled } from "./header.style";
import { TextStyled } from "../text/text.style";
import { standardColors } from "../../palettes/standardColors.style";

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
  return (
    <nav
      className={props.className + " navbar "}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to={"/"}>
          <TextStyled
            text={"Ringen Terapi"}
            color={standardColors.green1}
            textWeight={"semibold"}
            size={2}
            sizeTouch={4}
          />
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          {props.items.map((item, i) => (
            <NavbarItem key={i} item={item} itemSize={props.itemSize} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export { Header, NavbarLink, NavbarLinkUnderline };
