import React from "react";
import './Structure.css';

function Header() {
    return (
        <div className="header">
            <img src="./logo-rbg.png" alt="" className="logo" />
            <h1 style={{color:'green'}} className="title">Be Aware</h1>
        </div>
    )
}

export default Header;
