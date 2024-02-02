import React from "react";
import { format } from "timeago.js";
const NewsCard = ({ title, description, urlToImage, url, publishedAt }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <img
          src={urlToImage}
          className="card-img-top"
          style={{ height: "150px" }}
          alt="Not Found"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div> {format(publishedAt)}</div>
          <a href={url} className="btn btn-primary" target="_blank">
            view more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
