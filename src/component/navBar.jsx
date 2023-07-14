import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/css/header.css';

const NavBar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="inner">
      <div className="logo">
        <img className="navbar-log" src="https://cdn.worldvectorlogo.com/logos/spacex.svg" alt="spacex logo" />
      </div>
      <nav className="header-nav" role="navigation">
        <ul className="header-ul">
          <li className={location.pathname === '/' ? 'header-li active' : 'header-li'}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={location.pathname === '/viewCrew' ? 'header-li active' : 'header-li'}>
            <Link to="/viewCrew">Membres</Link>
          </li>
          <li className={location.pathname === '/articles' ? 'header-li active' : 'header-li'}>
            <Link to="/articles">Chronologie</Link>
          </li>
          <li
            onClick={handleDropdownToggle}
          >
            <span className='title-dropdown'>Lancement</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/rockets">Rockets</Link>
                <Link to="/lastLaunch ">Dernier lancement</Link>
                <Link to="/roadster">Roadster</Link>
              </div>
            )}
          </li>
          <li className={location.pathname === '/quiz' ? 'header-li active' : 'header-li'}>
            <Link to="/quiz">Quizz</Link>
          </li>
          <li className={location.pathname === '/about' ? 'header-li active' : 'header-li'}>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;