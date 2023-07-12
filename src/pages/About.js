import React from "react";
import Fetcher from "../component/fetcher";
import ArticleContainer from "../component/articleContainer";
import "../styles/css/about.css";

const About = () => {
  const renderAbout = ({ data }) => {
    

    return (




      <>





<div class="page-wrapper">
  <aside>
    <h1>{data.name}</h1>
  
    <p class="bio">{data.summary}</p>
  </aside>
 
<article>
  <div class="author">
    <p>{data.founder}</p>
    <p><span>{data.founded}</span></p>
    <div class="line"></div>
  </div>
  <div class="photographer">
    <p>{data.launch_sites}</p>
    <p><span>{data.employees}</span></p>
    <div class="line"></div>
  </div>
  <div class="image"></div>
</article>

  
  
  
  
  
  
  
  
  
  
  

  
</div>













      </>
    );
  };

  return (
    <Fetcher
      url="https://api.spacexdata.com/v4/company"
      render={renderAbout}
    />
  );
};

export default About;
