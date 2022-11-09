import React from "react";

import "./CharacterCard.css";

const CharacterCard = (props) => {
  return (
    <div className="col-md-6">
      <div className="card text-bg-warning mb-3">
        <div className="card-body">
          <h5 className="card-title" onClick={()=> props.onClickCharacter(props.character)}>{props.character.name}</h5>
        </div>
        <ul className="list-group list-group-flush card-info">
          <li className="list-group-item" key={`${props.character.name}-height`}>
            Height: {props.character.height}cm
          </li>
          <li className="list-group-item" key={`${props.character.name}-mass`}>
            Mass: {isNaN(props.character.mass) ? props.character.mass : `${props.character.mass}kg` }
          </li>
          <li className="list-group-item" key={`${props.character.name}-gender`}>
            Gender: {props.character.gender}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterCard;
