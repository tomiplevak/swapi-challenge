import React from "react";

const CharacterDetailsCard = (props) => {
  return (
    <div className="details-container">
        <h2>{props.character?.name}</h2>
        <p>{props.character?.mass}</p>
    </div>
  );
};

export default CharacterDetailsCard;
