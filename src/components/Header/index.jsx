import React from "react";

import { NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  const menuClass = ({ isActive }) => (isActive ? "menu__link menu__link--active" : "menu__link");

  return (
    <header className="header">
      <h1 className="header__title">Superkvíz</h1>

      <nav className="menu">
        <NavLink className={menuClass} to="/">
          Úvod
        </NavLink>
        <NavLink className={menuClass} to="/kvizy">
          Kvízy
        </NavLink>
        <NavLink className={menuClass} to="/zebricek">
          Žebříček
        </NavLink>

        {/*  tohle pak smaž  */}
        {/* <NavLink className={menuClass} to="/kviz1">
          Otázka
        </NavLink> */}
        <NavLink className={menuClass} to="/result">
          Vyhodnocení
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
