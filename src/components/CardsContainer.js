import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/characterService";
import CharacterCard from "./CharacterCard";

const CardsContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {characters?.results?.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
