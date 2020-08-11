import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import "./LatestNews.css";
import { getTopHeadlineAPI } from "../../service/disease_shAPI";
import NewsCard from "../../components/NewsCard/NewsCard";

function LatestNews() {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const getTopHeadLineNews = async () => {
      setLatestNews(await getTopHeadlineAPI());
    };
    getTopHeadLineNews();
  }, [setLatestNews]);

  return (
    <div className="latestNews">
      <h1 className="latestNews__title">Latest News</h1>
      <Grid columns={1} padded doubling>
        {latestNews.map((news, index) => {
          return (
            <Grid.Column key={index} className="latestNews__grid">
              <NewsCard data={news}/>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}

export default LatestNews;
