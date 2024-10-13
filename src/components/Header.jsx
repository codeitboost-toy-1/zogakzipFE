import React from "react";
import "../styles/components/Header.css";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import CreateGroupButton from "./CreateGroupButton.jsx";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="조각집" />
      </div>
      <Link to="/createGroup">
        <CreateGroupButton />
      </Link>
    </header>
  );
}

export default Header;

