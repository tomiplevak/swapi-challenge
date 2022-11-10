import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCharacters } from "../services/characterService";
import CharacterCard from "./CharacterCard";
import SearchBox from "./SearchBox";
import Spinner from "./Spinner";
import findIDFromString from "../utils/findIDFromString";

import "./CardsContainer.css";

const CardsContainer = () => {
  
  const [characters, setCharacters] = useState([]);
  const [searchedInput, setSearchedInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    getCharacters(currentPage, searchedInput).then((response) => {
      setCharacters(response);
      setIsLoading(false);
    });
  }, [currentPage, searchedInput]);

  const itemsPerPage = 10;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(characters?.count / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handdlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handdleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onClickCharacter = (character) => {
    const id = findIDFromString(character?.url, "people/");
    navigate(`/characters/${id}`);
  };

  const onSearch = (text) => {
    setSearchedInput(text);
    setIsLoading(true);
  };

  return (
    <div className="container">
      <SearchBox onSearch={onSearch} />
      <div className="row">
        {isLoading ? (
          <Spinner />
        ) : (
          characters?.results?.map((character) => (
            <CharacterCard
              character={character}
              key={character.name}
              onClickCharacter={onClickCharacter}
            />
          ))
        )}
      </div>
      <nav aria-label="Page navigation example" className="pagination-navbar">
        <ul className="pagination">
          <li className="page-item" key="previouspage">
            <a
              className="page-link page-link-logo"
              href="/#"
              aria-label="Previous"
              onClick={handdlePreviousPage}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li className="page-item" key={`li-${number}`}>
              <a
                className={
                  currentPage === number ? "activePage page-link" : "page-link"
                }
                href="/#"
                onClick={() => setCurrentPage(number)}
                key={`a-${number}`}
              >
                {number}
              </a>
            </li>
          ))}
          <li className="page-item" key="nextpage">
            <a
              className="page-link page-link-logo"
              href="/#"
              aria-label="Next"
              onClick={handdleNextPage}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CardsContainer;
