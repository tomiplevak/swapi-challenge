import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

import "./SearchBox.css";

const SearchBox = (props) => {
  const [input, setInput] = useState("");

  const handdleChange = (searchString) => {
    setInput(searchString);
    debounceSearch(searchString);
  };

  const debounceSearch = useMemo(() => {
    return debounce((searchString) => props.onSearch(searchString), 500);
  }, [props]);

  return (
    <div className="input-group mb-3 mx-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Search a Star Wars Character..."
        aria-label="Search a Star Wars Character..."
        aria-describedby="button-addon2"
        onChange={(e) => handdleChange(e.target.value)}
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
