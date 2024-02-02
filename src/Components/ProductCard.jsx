import React, { useState } from "react";

const ProductCard = ({
  thumbnail,
  title,
  brand,
  category,
  description,
  price,
  rating,
  id,
  removeHandle,
  updateHandle,
}) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");

  return (
    <>
      <div id="modalPosition">
        <div className="box">
          <h1>Update Product</h1>
          <div className="form-input">
            <input
              type="text"
              placeholder="Enter new Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter new Prize"
              onChange={(e) => {
                setPrize(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const updateData = {
                  title: name,
                  price: prize,
                };
                updateHandle(id, updateData);
                let model = document.getElementById("modalPosition");
                model.classList.remove("active");
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <img
          src={thumbnail}
          className="card-img-top"
          style={{ height: "150px" }}
          alt="Not Found"
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="ratingBox">
            <div>Price {price}</div>
            <div>{rating}</div>
          </div>
          <div className="ratingBox">
            <button
              style={{ background: "skyblue" }}
              onClick={(e) => {
                let model = document.getElementById("modalPosition");
                model.classList.add("active");
              }}
            >
              update
            </button>
            <button
              style={{ background: "tomato" }}
              onClick={(e) => {
                console.log("clicking on btn " + id);
                removeHandle(id);
              }}
            >
              remove
            </button>
          </div>
          <div> </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
