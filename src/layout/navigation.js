import React from 'react';
import NavBar from '../component/navBar';

const Navigation = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Navigation;
