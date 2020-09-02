import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="uk-text-center">
            <h1 className="page-heading" id="heading" style={{ paddingTop: props.padding }}>{props.title}</h1>
        </div>
    )
};

export default Header;