import React from 'react';
import logo from '../images/header-logo.svg'

function Header() {
    return (
        <header className="header page__header">
            <img src={logo} alt="Логотип Место" className="header__logo" />
            <div className="line"></div>
        </header>
    );
}

export default Header;
