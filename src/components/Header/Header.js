import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo2.png';

const Header = () => {
  return (
    <header className = {styles.header}>
      <img src = {logo} alt="Space X" />
      <nav>
        <ul>
          <li>
            <Link to = "/">HISTORY</Link>
          </li>
          <li>
            <Link to = "/rockets">ROCKETS</Link>
          </li>
          <li>
            <Link to = "/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
