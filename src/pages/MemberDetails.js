import React from 'react';
import { useParams } from 'react-router-dom';
import Fetcher from '../component/fetcher';
import DisplayCrew from '../component/displayCrew';
import '../styles/css/viewDetails.css';

const MemberDetails = () => {
  const { id } = useParams();

  const renderMemberDetails = ({ data }) => {
    const member = data.find((member) => member.id === id);

    if (!member) {
      return <div>Member not found</div>;
    }

    return (
      <div className="slide">
        <div className="card">
          <div className="card__img">
            <img src={member.image} alt={member.name} className="card__img" />
          </div>
          <div className="card__content">
            <h2 className="card__content-theme">{member.name}</h2>
            <p className="card__content-title">{member.agency}</p>
            <p className="card__content-status">
              {member.status ? 'Active' : 'Inactive'}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fetcher
      url="https://api.spacexdata.com/v4/crew"
      render={renderMemberDetails}
    />
  );
};

export default MemberDetails;
