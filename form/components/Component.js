import React from "react";
import "./style.css";
import Navbar from "./navbar";
import Container from "./container";

function Form() {
    return(
        <div>
            <div className="header">This is Header Part</div>
            <div className="body_part">
                <div className="navbar"><Navbar /></div>
                <div className="container"><Container /></div>
            </div>
            <div className="footer">This is Header Part</div>
        </div>
    );
    
}
export default Form;