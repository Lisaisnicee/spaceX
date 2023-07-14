import React from "react";
import Fetcher from "../component/fetcher";
import "../styles/css/roadster.css";

const ViewRoadster = () => {
  const renderRoadster = ({ data }) => {
    
    return (
      <>
        <div className="roadster-image" style={{ backgroundImage: `url(${data.flickr_images})`, height : "575px", backgroundRepeat : "no-repeat"}}>
            <div className="roadster-container">
                <h1>Roadster</h1>
                <p className="roadster-text">{data.name}</p>
                <p className="roadster-text">Lancer le {data.launch_date_utc}</p>
                <p className="roadster-text">{data.longitude}</p>
                <p className="roadster-text">{data.speed_kph}</p>
                <p className="roadster-text">{data.earth_distance_km}</p>
                <p className="roadster-text">Type d'orbite : {data.orbit_type}</p>
            </div>
        </div>
      </>
    );
  };

  return (
    <Fetcher
      url="https://api.spacexdata.com/v4/roadster"
      render={renderRoadster}
    />
  );
};

export default ViewRoadster;
