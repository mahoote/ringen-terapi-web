import React from "react";
import { Link } from "react-router-dom";

function NavbarItem(props) {
  const item = props.item;

  if (item.type === "text" && item.items === undefined) {
    return <a className="navbar-item">{item.name}</a>;
  } else if (item.type === "text" && item.items !== undefined) {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">{item.name}</a>

        <div className="navbar-dropdown">
          {item.items.map((item, i) => (
            <NavbarItem key={i} item={item} />
          ))}
        </div>
      </div>
    );
  } else if (item.type === "button") {
    return (
      <div className="navbar-item">
        <button className={"button"}>{item.name}</button>
      </div>
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
          <p className={"is-size-2"}>Ringen Terapi</p>
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
