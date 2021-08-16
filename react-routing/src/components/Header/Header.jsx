import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.scss';

const Header = () => (
  <header className={style.header}>
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <Link className={style.navLink} to="/">
            Home
          </Link>
        </li>
        <li className={style.navItem}>
          <Link className={style.navLink} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
