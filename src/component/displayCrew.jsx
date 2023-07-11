import React from 'react';
import '../styles/css/viewAllCrew.css';

const DisplayCrew = ({ name, image }) => {
  return (
    <div className="container">
      <ul className="image-list grid-view">
        <li>
          <figure>
            <img src={image} alt="" />
            <figcaption>
              <p>Crew member</p>
              <p>{name}</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default DisplayCrew;
