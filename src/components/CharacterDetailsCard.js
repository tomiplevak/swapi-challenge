import React from "react";

import "./CharacterDetailsCard.css";
import episode1Poster from "../assets/episode1.jpg";
import episode2Poster from "../assets/episode2.jpg";
import episode3Poster from "../assets/episode3.jpg";
import episode4Poster from "../assets/episode4.jpg";
import episode5Poster from "../assets/episode5.jpg";
import episode6Poster from "../assets/episode6.jpg";
import findIDFromString from "../utils/findIDFromString";

const filmsPoster = new Map([
  ['1', episode1Poster],
  ['2', episode2Poster],
  ['3', episode3Poster],
  ['4', episode4Poster],
  ['5', episode5Poster],
  ['6', episode6Poster]
])

const CharacterDetailsCard = (props) => {
  const characterFilms = [];

  props.character?.films.forEach(film => {
    const filmID = findIDFromString(film,"films/")
    characterFilms.push(filmID);
  });

  const imgFilms = characterFilms.map((film) => filmsPoster.get(film));

  return (
    <div className="card-container">
      <div className="card text-center card-details">
        <div className="card-body">
          <h4 className="card-title card-details-title">{props.character?.name}</h4>
          <p className="card-text">Height: {props.character?.height}cm</p>
          <p className="card-text">
            Mass:{" "}
            {isNaN(props.character?.mass)
              ? props.character?.mass
              : `${props.character?.mass}kg`}
          </p>
          <p className="card-text">Hair Color: {props.character?.hair_color}</p>
          <p className="card-text">Skin Color: {props.character?.skin_color}</p>
          <p className="card-text">Eye Color: {props.character?.eye_color}</p>
          <p className="card-text">Birth Year: {props.character?.birth_year}</p>
          <p className="card-text">Gender: {props.character?.gender}</p>
          <p className="card-text">Appears in Episodes:</p>
          <div className="row">
            {characterFilms?.map((film) => (
              <div className="col">
              <p className="card-text film-episode">{film}</p>
              </div>
            ))}
          </div>
          <div className="row">
            {imgFilms?.map((film) => (
              <div className="col">
              <img src={film} alt="film-poster" className="img-fluid"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsCard;
