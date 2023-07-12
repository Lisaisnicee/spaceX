import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/css/header.css';
const NavBar = () => {
  const location = useLocation();

  return (
    <div className="inner">
      <div className="logo">
        <img className='navbar-log' src='https://cdn.worldvectorlogo.com/logos/spacex.svg' alt='spacex logo'/>
      </div>
      <nav className='header-nav' role='navigation'>
        <ul className='header-ul'>
          <li className={location.pathname === '/' ? 'header-li active' : 'header-li'}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={location.pathname === '/viewCrew' ? 'header-li active' : 'header-li'}>
            <Link to="/viewCrew">Membres</Link>
          </li>
          <li className={location.pathname === '/chronlogy' ? 'header-li active' : 'header-li'}>
            <Link to="/chronlogy">Chronologie</Link>
          </li>
          <li className={location.pathname === '/about' ? 'header-li active' : 'header-li'}>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;