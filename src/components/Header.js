import "../components/Header.css";
import React from 'react';


function Header() {

    return (
        <div className="header">
            <div className="header__live">
                <h2>🔴LIVE</h2>
            </div>
            <div className="header__title">
                <h1>India's Covid-19 Live Tracker</h1>
            </div>
        </div>
    )
}

export default Header;
