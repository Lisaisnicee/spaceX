import React from "react";
import Fetcher from "../component/fetcher";
import RocketsDetail from "../component/rocketsDetail";
import "../styles/css/rocketsDetail.css";
import { useParams } from "react-router-dom";



const ViewRocketsDetail = () => {
  const { id } = useParams();
  const renderRocketsDetail = ({ data }) => {

    return (
      <>
      <div className="rocketDetail-container">
                <RocketsDetail
                  name={data.name}
                  flickr_images={data.flickr_images}
                  height_meters= {data.height.meters}
                  // diameter_meters= {data.diameter.meters}
                  // mass_kg= {data.mass.kg}
                  // first_stage_reusable= {data.first_stage.reusable}
                  // first_stage_fuel_amount_tons= {data.first_stage.fuel_amount_tons}
                  // second_stage_payloads_composite_fairing_height= {data.second_stage.payloads.composite_fairing.height.meters}
                  // second_stage_payloads_composite_fairing_diameter= {data.second_stage.payloads.composite_fairing.diameter.meters}
                  // second_stage_reusable= {data.second_stage.reusable}
                  // second_stage_fuel_amount_tons= {data.second_stage.fuel_amount_tons}
                />
        </div>
      </>
    );
  };

  return (
    <Fetcher
    url={`https://api.spacexdata.com/v4/rockets/${id}`}
      render={renderRocketsDetail}
    />
  );
};

export default ViewRocketsDetail;
