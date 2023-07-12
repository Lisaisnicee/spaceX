import React from 'react';
import '../styles/css/viewAllCrew.css';
import { Link } from 'react-router-dom';

const DisplayCrew = ({ name, image, id }) => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top', 
    backgroundRepeat: 'no-repeat',
  };

  const linkStyle = {
    textDecoration: 'none', 
    color: 'inherit', 
  };

  return (
    <Link to={`/member/${id}`} style={linkStyle}>
      <div className="card-body">
        <div className="section" style={sectionStyle}></div>
        <div className="text-wrapper">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default DisplayCrew;
