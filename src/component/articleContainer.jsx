import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/main.css";

const ArticleContainer = ({ title, event_date_utc, event_date_unix, details, link }) => {
    const linkStyle = {
        textDecoration: 'none', 
        color: 'inherit', 
      };
    return (
    <li>
      <div class="timeline-content">
        <h3 class="date">{event_date_utc}</h3>
        <h3 class="snddate">{event_date_unix}</h3>
        <h1>{title}</h1>
        <p>{details}</p>
        <br></br>
        <Link to={link} className="readmore" style={linkStyle}>Lire plus
</Link> 
        
        
        
      </div>
    </li>
  );
};

export default ArticleContainer;
