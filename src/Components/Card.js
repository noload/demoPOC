import React from "react";
import {format} from "timeago.js"

const Card = ({ news }) => {
//   console.log(news);
  return (
    <>
    <div className="cardContainer">
      {news?.map((item) => {
        return (
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
              <img src={item?.urlToImage} className="card-img-top" alt="No image" style={{width:"100%",height:"180px",padding:"5px",borderRadius:"10px"}}/>
              <div className="card-body">
                <h5 className="card-title" style={{height:"50px"}}>{item?.title.length>45 ? item?.title.slice(0,45) +"...":item?.title}</h5>
                <p className="card-text" style={{height:"100px"}}>{item?.description?.length>100 ? item?.description.slice(0,100) +"...":item?.description}
                </p>
                <p><strong>Author</strong> : {item.author ?item.author:"Unknown"} </p>
                <p><strong>Published at : </strong>{format(item.publishedAt)}</p>
                <a href={item?.url} className="btn btn-primary" target="_blank">
                    View More
                  
                </a>
              </div>
            </div>
        );
    })}
    </div>
      {/* <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </>
  );
};


export default Card;
