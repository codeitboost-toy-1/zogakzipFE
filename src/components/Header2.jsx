import React from "react";
import "../styles/components/Header2.css";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import CreateGroupButton from "./CreateGroupButton.jsx";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="조각집" />
      </div>
    </header>
  );
}

export default Header;

