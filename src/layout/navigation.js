import React from 'react';
import NavBar from '../component/navBar';

const Navigation = ({ children }) => {
  return (
    <>
    <header id="topnav">
      <NavBar />
    </header>
      <main>{children}</main>
      </>
  );
};

export default Navigation; 