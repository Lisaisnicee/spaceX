import React from 'react';
import { useParams } from 'react-router-dom';
import Fetcher from '../component/fetcher';
import '../styles/css/rocketsDetail.css';

const ViewRocketsDetail = () => {
  const { id } = useParams();

  const renderRocketsDetail = ({ data }) => {
    const rocket = data.find((rocket) => rocket.id === id);

    if (!rocket) {
      return <div>Rocket not found</div>;
    }

    return (
      <>
        <div className="rocket-detail-conainter">
          <div className="rocketdetail-card">
            <h2>{rocket.name}</h2>
            <div className="rocket-info">
              <p className="rocket-text">Hauteur {rocket.height.meters} m</p>
              <p className="rocket-text">Largeur {rocket.diameter.meters} m</p>
              <p className="rocket-text">Poid {rocket.mass.kg} kg</p>
            </div>
          </div>
          <div className="rocketdetail-card">
            <p className="rocket-text">Pays d'origine {rocket.country}</p>
            <p className="rocket-text">Entreprise {rocket.company}</p>
            <p className="rocket-text">Premier vol {rocket.first_flight}</p>
            <p className="rocket-text">Description {rocket.description}</p>
          </div>
        </div>
        <div className="rocketdetail-image">
          {rocket.flickr_images.map((item, index) => (
            <img key={index} src={item} alt="fusée" /> // Add the "key" prop with a unique identifier
          ))}
        </div>
        <p>.</p>
      </>
    );
  };

  return (
    <Fetcher
      url="https://api.spacexdata.com/v4/rockets"
      render={renderRocketsDetail}
    />
  );
};

export default ViewRocketsDetail;
