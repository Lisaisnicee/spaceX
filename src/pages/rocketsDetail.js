import React from "react";
import { useParams } from "react-router-dom";
import Fetcher from "../component/fetcher";
import "../styles/css/rocketsDetail.css";

const ViewRocketsDetail = () => {
  const { id } = useParams();

  const renderRocketsDetail = ({ data }) => {
    const rocket = data.find((rocket) => rocket.id === id);

    if (!rocket) {
      return <div>Rocket not found</div>;
    }

    return (
      <div className="slide">
        <div className="rocket-card">
          <h2>{rocket.name}</h2>
          <p>{rocket.height.meters} m</p>
          <p>{rocket.diameter.meters} m</p>
          <p>{rocket.mass.kg} kg</p>
          <p>1er étage, réutilisable: {rocket.first_stage.reusable}</p>
          <p>1er étage, carburant consommé: {rocket.first_stage.fuel_amount_tons} tonnes</p>
          <p>2ème étage, {rocket.second_stage.payloads.composite_fairing.height.meters} m</p>
          <p>2ème étage, {rocket.second_stage.payloads.composite_fairing.diameter.meters} m</p>
          <p>2ème étage, réutilisable: {rocket.second_stage.reusable}</p>
          <p>2ème étage, carburant consommé: {rocket.second_stage.fuel_amount_tons} tonnes</p>
        </div>
      </div>
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
