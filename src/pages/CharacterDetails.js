import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CharacterDetailsCard from "../components/CharacterDetailsCard";
import { getCharacterById } from "../services/characterService";
import Spinner from '../components/Spinner'

const CharacterDetails = () => {
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id).then((response) => {
      setCharacter(response);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoading? <Spinner /> : <CharacterDetailsCard character={character}/>}
    </>
  );
};

export default CharacterDetails;
