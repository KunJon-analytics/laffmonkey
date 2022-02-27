import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div>
          <CollectionCard
            key={punk.no}
            id={punk.no}
            name={punk.name}
            traits={punk.moonPhase}
            image={punk.image}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
