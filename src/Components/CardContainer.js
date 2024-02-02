import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import NewsCard from "./Card";

const CardContainer = () => {
  const [news, setNews] = useState([]);
  const fecthNewsFunction = async () => {
    const fetchNews = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-01-02&sortBy=publishedAt&apiKey=0b2df5b34fb642109d9e52c574a6b583"
    );
    setNews(fetchNews.data.articles);
  };

  useEffect(() => {
    fecthNewsFunction();
  }, []);
  return (
    <>
      <div className="heading">Top Tranding News</div>
      <div className="container">
        {news.map((item, index) => {
          return <NewsCard {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default CardContainer;
