import React from 'react';
import './Header.css';
import logo from '../../images/discogify-logo.svg';

function Header({ handleAboutClick }) {

  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" alt="Discogify logo" src={logo}/>
      </div>
      <div className="header__center">
        <h1 className="header__title">Discogify</h1>
      </div>
      <button className="header__right">
        <h3 className="header__about" onClick={handleAboutClick}>About</h3>
      </button>
    </header>
  )
}

export default Header;