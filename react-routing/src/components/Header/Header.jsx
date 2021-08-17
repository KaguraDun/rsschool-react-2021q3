import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.scss';

const Header = () => (
  <header className={style.header}>
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <NavLink
            activeClassName={style.selected}
            className={style.navLink}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink
            activeClassName={style.selected}
            className={style.navLink}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
