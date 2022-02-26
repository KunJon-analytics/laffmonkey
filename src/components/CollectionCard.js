import React from "react";
import gas from "../assets/gas.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">.#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={gas} className="gasImage" alt="" />
          <div className="price">{traits}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
