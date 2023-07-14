import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/main.css';

const Rockets = ({ name, flickr_images, id }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };
  return (
    <>
      <Link to={`/rockets/${id}`} style={linkStyle}>
        <div className="rocket-card">
          <img src={flickr_images} alt="fusé"></img>
          <h2>{name}</h2>
        </div>
      </Link>
    </>
  );
};

export default Rockets;
