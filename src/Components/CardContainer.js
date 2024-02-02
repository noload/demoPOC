import React from "react";
import Card from "./Card";

const CardContainer = ({ news }) => {
  return (
    <>
      <Card items={news} />
    </>
  );
};

export default CardContainer;
