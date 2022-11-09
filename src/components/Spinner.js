import React from "react";
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner-border text-warning mx-auto" role="status">
      <span className="sr-only"></span>
    </div>
  );
};

export default Spinner;
