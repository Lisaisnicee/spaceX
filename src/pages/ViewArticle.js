import React from "react";
import Fetcher from "../component/fetcher";
import ArticleContainer from "../component/articleContainer";
import "../styles/css/article.css";

const ViewArticle = () => {
  const renderArticles = ({ data }) => {
    

    return (
      <>
        <div class="container">
          <div class="timeline">
            <ul>
              {data.map((item) => (
                <ArticleContainer
                  title={item.title}
                  event_date_utc={item.event_date_utc}
                  details={item.details}
                  event_date_unix={item.event_date_unix}
                  link={item.links.article}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  return (
    <Fetcher
      url="https://api.spacexdata.com/v4/history"
      render={renderArticles}
    />
  );
};

export default ViewArticle;
