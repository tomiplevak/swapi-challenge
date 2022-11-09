import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/characterService";
import CharacterCard from "./CharacterCard";
import "./CardsContainer.css";
import { useNavigate } from "react-router";
import SearchBox from "./SearchBox";

const CardsContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedInput, setSearchedInput] = useState('');

  const itemsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    getCharacters(currentPage, searchedInput).then((response) => {
      setCharacters(response);
    });
  }, [currentPage, searchedInput]);

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
    const indexOfPeople = character?.url?.indexOf("people/");
    const id = character?.url?.substring(indexOfPeople + "people/".length).replace('/','');
    navigate(`/characters/${id}`);
  };

  const onSearch = (text) => {
    setSearchedInput(text);
  }

  return (
    <div className="container">
      <SearchBox onSearch={onSearch}/>
      <div className="row">
        {characters?.results?.map((character) => (
          <CharacterCard
            character={character}
            key={character.name}
            onClickCharacter={onClickCharacter}
          />
        ))}
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
