/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MobileMenu() {
    return (
        <div id="menu-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <ul className="uk-list">
                    <li><Link to="/about" className="nav-item mobile-nav-item">About</Link></li>
                    <li><Link to="/portfolio" className="nav-item mobile-nav-item">Portfolio</Link></li>
                    <li><Link to="/skills" className="nav-item mobile-nav-item">Skills</Link></li>
                    <li><a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/julie-ritz-52a26787/" target="_blank" className="contact-icon contact-link-icon"></a></li>
                        <li><a uk-icon="icon: mail" href="mailto:julie.ritz@gmail.com" className="contact-icon contact-link-icon"></a></li>
                        <li><a uk-icon="icon: github-alt" href="https://github.com/julieritz" className="contact-icon contact-link-icon" target="_blank"></a></li>
                </ul>
            </div>
        </div>
    )
};

export default MobileMenu;