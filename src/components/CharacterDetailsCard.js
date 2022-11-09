import React from "react";

import "./CharacterDetailsCard.css";
import episode1Poster from "../assets/episode1.jpg";
import episode2Poster from "../assets/episode2.jpg";
import episode3Poster from "../assets/episode3.jpg";
import episode4Poster from "../assets/episode4.jpg";
import episode5Poster from "../assets/episode5.jpg";
import episode6Poster from "../assets/episode6.jpg";
import episode7Poster from "../assets/episode7.jpg";
import episode8Poster from "../assets/episode8.jpg";
import episode9Poster from "../assets/episode9.jpg";

const CharacterDetailsCard = (props) => {
  const characterFilms = [];

  props.character?.films.forEach((element) => {
    const indexOfFilms = element.indexOf("films/");
    const films = element
      .substring(indexOfFilms + "films/".length)
      .replace("/", "");
    characterFilms.push(films);
  });

  const imgFilms = characterFilms.map((film) => {
    if (film === "1") {
      return episode1Poster;
    } else if (film === "2") {
      return episode2Poster;
    } else if (film === "3") {
      return episode3Poster;
    } else if (film === "4") {
      return episode4Poster;
    } else if (film === "5") {
      return episode5Poster;
    } else if (film === "6") {
      return episode6Poster;
    } else if (film === "7") {
      return episode7Poster;
    } else if (film === "8") {
      return episode8Poster;
    } else if (film === "9") {
      return episode9Poster;
    } else {
    }
  });

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
              <p className="card-text">{film}</p>
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
