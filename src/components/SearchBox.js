import React, { useState } from "react";

import './SearchBox.css';

const SearchBox = (props) => {
  const [input, setInput] = useState('');

  const handdleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value)
  };

  return (
    <div className="input-group mb-3 mx-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Search a Star Wars Character..."
        aria-label="Search a Star Wars Character..."
        aria-describedby="button-addon2"
        onChange={handdleChange}
        value={input}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => props.onSearch(input)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
