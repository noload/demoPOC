import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
const ProductContainer = () => {
  const [productList, setProductList] = useState([]);
  const fetchData = async () => {
    const resp = await axios.get("https://dummyjson.com/products");
    console.log(resp.data.products);
    setProductList(resp.data.products);
  };

  function clickRemoveHandle(id) {
    const newProductList = productList.filter((product) => {
      if (product.id != id) {
        return product;
      }
    });
    setProductList(newProductList);
    console.log(newProductList.length);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {}, [productList]);
  return (
    <>
      <div className="heading">Top Tranding News</div>
      <div className="container">
        {productList?.map((item, index) => {
          return (
            <ProductCard
              {...item}
              key={item.id}
              removeHandle={clickRemoveHandle}
              // updateHandle={clickUpdateHandle}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductContainer;
