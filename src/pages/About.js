import React from 'react';
import Fetcher from '../component/fetcher';
import ArticleContainer from '../component/articleContainer';
import '../styles/css/about.css';

const About = () => {
  const renderAbout = ({ data }) => {
    return (
      <>
        <div className="page-wrapper">
          <aside>
            <h1>{data.name}</h1>

            <p className="bio">{data.summary}</p>
          </aside>

          <article>
            <div className="author">
              <div className="line">
                <p>FOUNDER : {data.founder}</p>
              </div>
              <div className="line">
                {' '}
                <p>FOUNDED IN : {data.founded}</p>{' '}
              </div>
              <div className="line">
                {' '}
                <p>NUMBER OF EMPLOYEES : {data.employees}</p>
              </div>
              <div className="line">
                {' '}
                <p>NUMBER OF VEHICULES: {data.vehicules}</p>
              </div>
              <div className="line">
                {' '}
                <p>NUMBER OF LAUNCH SITES: {data.launch_sites}</p>
              </div>
              <div className="line">
                {' '}
                <p>NUMBER OF TEST SITES: {data.test_sites}</p>
              </div>
              <br></br>
              <div className="line">
                {' '}
                <p>CEO: {data.ceo}</p>
              </div>
              <div className="line">
                {' '}
                <p>CTO: {data.cto}</p>
              </div>
              <div className="line">
                {' '}
                <p>COO: {data.coo}</p>
              </div>
              <div className="line">
                {' '}
                <p>CTO PROPULSION: {data.cto_propulsion}</p>
              </div>
              <div className="line">
                {' '}
                <p>VALUATION: {data.valuation}</p>
              </div>
            </div>
            <div className="photographer"></div>
            <div className="image"></div>
          </article>
        </div>
      </>
    );
  };

  return (
    <Fetcher url="https://api.spacexdata.com/v4/company" render={renderAbout} />
  );
};

export default About;
