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
  <div class="line"><p>FOUNDER : {data.founder}</p></div>
  <div class="line"> <p>FOUNDED IN : {data.founded}</p> </div>
  <div class="line"> <p>NUMBER OF EMPLOYEES : {data.employees}</p></div>
  <div class="line"> <p>NUMBER OF VEHICULES: {data.vehicules}</p></div>
  <div class="line"> <p>NUMBER OF LAUNCH SITES: {data.launch_sites}</p></div>
  <div class="line"> <p>NUMBER OF TEST SITES: {data.test_sites}</p></div>
  <br></br>
  <div class="line"> <p>CEO: {data.ceo}</p></div>
  <div class="line"> <p>CTO: {data.cto}</p></div>
  <div class="line"> <p>COO: {data.coo}</p></div>
  <div class="line"> <p>CTO PROPULSION: {data.cto_propulsion}</p></div>
  <div class="line"> <p>VALUATION: {data.valuation}</p></div>
  </div>
  <div class="photographer">





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
