import React from "react";
import ProductContainer from "./ProductContainer";

const ProductNavbar = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <button>Add Product</button>
          <button>Update Product</button>
          <button>Delete Product</button>
        </div>
        <div className="right">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <ProductContainer />
      </div>
    </>
  );
};

export default ProductNavbar;
