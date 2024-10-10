import React from 'react';
import '../styles/components/Header.css';
import Logo from '../img/logo.svg';
import CreateGroupButton from '../components/CreateGroupButton.js'

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="조각집" />
        </div>
        <CreateGroupButton />
      </header>
    );
  }
  
  export default Header;
