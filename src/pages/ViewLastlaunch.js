import React from 'react';
import Fetcher from './../component/fetcher';
import '../styles/css/lastlaunch.css';

const ViewLastlaunch = () => {
  const renderLastLaunch = ({ data, loading, error }) => {
    return (
      <>
        <h1>Last launch</h1>
        {console.log(data)}
        {console.log(data.crew)}

        {data.crew && (
          <>
            <p className="lastlaunch-text">Crew:</p>
            {data.crew.map((item, index) => (
              <div key={index}>
                <p className="lastlaunch-text">{item.name}</p>
              </div>
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <Fetcher
      url="https://api.spacexdata.com/v5/launches/latest"
      render={renderLastLaunch}
    />
  );
};

export default ViewLastlaunch;
