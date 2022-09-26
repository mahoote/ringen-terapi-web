import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../button/button.style";

function NavbarItem(props) {
  const item = props.item;

  if (item.type === "text" && item.items === undefined) {
    return (
      <Link className="navbar-item" to={item.link}>
        <p>{item.name}</p>
      </Link>
    );
  } else if (item.type === "text" && item.items !== undefined) {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-item" to={item.link}>
          <p>{item.name}</p>
        </Link>

        <div className="navbar-dropdown">
          {item.items.map((item, i) => (
            <NavbarItem key={i} item={item} />
          ))}
        </div>
      </div>
    );
  } else if (item.type === "button") {
    return (
      <Link className="navbar-item" to={item.link}>
        <ButtonStyled value={item.name} borderWidth={"3px"} />
      </Link>
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
          <p className={"is-size-2-desktop is-size-4-touch"}>Ringen Terapi</p>
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
            <NavbarItem key={i} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export { Header };
