/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
    navbar: {
        backgroundColor: "transparent"
    },
};

function Nav(props) {

    return (
        <div>
            <nav className="uk-navbar-container uk-navbar navbar" style={style.navbar}>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav uk-visible@m">
                        <li><Link to="/about" className="nav-item" style={{ color: props.color }}>About</Link></li>
                        <li><Link to="/portfolio" className="nav-item" style={{ color: props.color }}>Portfolio</Link></li>
                        <li><Link to="/skills" className="nav-item" style={{ color: props.color }}>Skills</Link></li>
                        <li><a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/julie-ritz-52a26787/" target="_blank" className="contact-icon contact-link-icon"></a></li>
                        <li><a uk-icon="icon: mail" href="mailto:julie.ritz@gmail.com" className="contact-icon contact-link-icon"></a></li>
                        <li><a uk-icon="icon: github-alt" href="https://github.com/julieritz" className="contact-icon contact-link-icon" target="_blank"></a></li>
                    </ul>
                    <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon"
                        uk-icon="icon: menu; ratio: 1.5"></span></a>
                </div>
            </nav>
        </div>
    )
};

export default Nav;