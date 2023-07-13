import React from "react";
import Fetcher from "../component/fetcher";
import Rockets from "../component/rockets";
import "../styles/css/rockets.css";

const ViewRockets = () => {
  const renderRockets = ({ data }) => {
    

    return (
      <>
      <div className="rocket-container">
              {data.map((item) => (
                <Rockets
                  name={item.name}
                  flickr_images={item.flickr_images}
                  id={item.id}
                />
              ))}
        </div>
      </>
    );
  };

  return (
    <Fetcher
      url="https://api.spacexdata.com/v4/rockets"
      render={renderRockets}
    />
  );
};

export default ViewRockets;
