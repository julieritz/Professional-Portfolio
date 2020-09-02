/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function WritingCard(props) {
    return (
        <div>
            <div className="uk-card uk-card-default writing-card">
                <div className="uk-card-body writing-card-body">
                    <h3 className="uk-card-title writing-title">{props.title}</h3>
                    <p className="project-description">{props.about}</p>
                    <div className="uk-text-center">
                        <a href={props.siteURL} target="_blank" className="btn-link">
                            <button className="uk-button uk-button-default website-btn">Website</button>
                        </a>
                        <a href={props.blogURL} target="_blank" className="btn-link">
                            <button className="uk-button uk-button-default website-btn">Blog</button>
                        </a>
                        <br /><br /><a href={props.instagram} uk-icon="instagram"></a>
                        <a href={props.facebook} uk-icon="facebook"></a>
                        <a href={props.twitter} uk-icon="twitter"></a>
                        <a href={props.youtube} uk-icon="youtube"></a>
                        <a href={props.pinterest} uk-icon="pinterest"></a>
                    </div>
                </div>
                <div className="uk-card-footer portfolio-card-footer">
                </div>
            </div>
        </div>
    )
};

export default WritingCard;