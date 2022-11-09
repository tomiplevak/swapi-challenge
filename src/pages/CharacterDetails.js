import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CharacterDetailsCard from "../components/CharacterDetailsCard";
import { getCharacterById } from "../services/characterService";

const CharacterDetails = () => {
  const [character, setCharacter] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id).then((response) => {
      setCharacter(response);
    });
  }, [id]);

  return (
    <>
      <CharacterDetailsCard character={character}/>
    </>
  );
};

export default CharacterDetails;
