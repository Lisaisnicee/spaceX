import React from 'react';
import { Link } from 'react-router-dom';

const ArticleContainer = ({
  title,
  event_date_utc,
  event_date_unix,
  details,
  link,
}) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };
  return (
    <li>
      <div className="timeline-content">
        <h3 className="date">{event_date_utc}</h3>
        <h3 className="snddate">{event_date_unix}</h3>
        <h1>{title}</h1>
        <p>{details}</p>
        <br></br>
        <Link to={link} className="readmore" style={linkStyle}>
          Lire plus
        </Link>
      </div>
    </li>
  );
};

export default ArticleContainer;
