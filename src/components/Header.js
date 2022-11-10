import React from "react";
import { useNavigate } from "react-router";
import Logo from "../assets/header-logo.svg";

import "./Header.css";

const Header = () => {

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <img
        src={Logo}
        alt="header-logo"
        onClick={navigateToHome}
        className="header-logo"
      />
      <p className="header-paragraph">
        All the Star Wars data you've ever wanted.
        <br />
        Look for your favorites characters and find out!
      </p>
    </div>
  );
};

export default Header;
