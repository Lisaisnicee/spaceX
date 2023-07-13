import React from "react";
import "../styles/css/main.css";

const RocketsDetail = ({ name, flickr_images, id, height_meters, diameter_meters, mass_kg, first_stage_reusable, first_stage_fuel_amount_tons, second_stage_payloads_composite_fairing_height, second_stage_payloads_composite_fairing_diameter, second_stage_reusable, second_stage_fuel_amount_tons }) => {
    return (
      <>
          <div className="rocket-card">
          {/* {flickr_images.map((image, index) => (
            <img src={image} alt="fusé"></img>
          ))} */}
            <h2>{name}</h2>
            <p>{height_meters} m</p>
            <p>{diameter_meters} m</p>
            <p>{mass_kg} kg</p>
            <p>1er étage, réutilisable : {first_stage_reusable}</p>
            <p>1er étage, carburant consomé : {first_stage_fuel_amount_tons} tones</p> 
            <p>2ème étage, {second_stage_payloads_composite_fairing_height} m</p>
            <p>2ème étage, {second_stage_payloads_composite_fairing_diameter} m</p>
            <p>2ème étage, réutilisable :{second_stage_reusable}</p>
            <p>2ème étage, carburant consomé : {second_stage_fuel_amount_tons} tones</p> 
          </div>
      </>
  );
};

export default RocketsDetail;
