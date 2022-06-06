import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PortfolioCard from "../components/PortfolioCard";
import WritingCard from "../components/WritingCard";
import CardContainer from "../components/CardContainer";
import Background from "../components/Background";
import coding from "../utils/coding";
import writing from "../utils/writing";
import imageURL from "../assets/images/background/long-flowers.jpg";

function Portfolio() {
    return (
        <Background image={imageURL} >
            <Nav />
            <Header padding={70} title="Writing & Social Media" />
            <hr />
            <CardContainer>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="portfolio-section">
                    {
                        writing.map((el, index) => {
                            return <WritingCard
                                title={el.title}
                                about={el.about}
                                siteURL={el.siteURL}
                                blogURL={el.blogURL}
                                instagram={el.instagram}
                                facebook={el.facebook}
                                twitter={el.twitter}
                                youtube={el.youtube}
                                pinterest={el.pinterest}
                                key={index}
                            />
                        })
                    }
                </div>
            </CardContainer>
            <Header padding={70} title="Email Campaigns" />
            <hr />
            <div className="uk-text-center">
                <a href="https://julieritz.github.io/Portfolio/assets/images/Welcome-to-Washington-Fun-Facts-You-Should-Know.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 1</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Foods-to-Try-When-You-Move-to-Washington.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 2</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Top-Places-to-Hike-in-Washington.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 3</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Things-to-Do-in-Washington-in-the-Winter.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 4</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Things-to-Do-in-Washington-in-the-Spring.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 5</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Things-to-Do-in-Washington-in-the-Summer.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 6</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Things-to-Do-in-Washington-in-the-Fall.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 7</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Weather-in-Washington-and-What-Youll-Need" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 8</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/A-Guide-to-Seattles-Iconic-Neighborhoods.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 9</button>
                </a>
                <a href="https://julieritz.github.io/Portfolio/assets/images/Top-Things-to-Do-in-Seattle.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Email 10</button>
                </a>
            </div>
            <Header padding={70} title="Websites & Applications" />
            <hr />
            <CardContainer>
                <div className="uk-child-width-1-2@m uk-grid-match" uk-grid="true" id="portfolio-section">
                    {
                        coding.map((el, index) => {
                            return <PortfolioCard
                                title={el.title}
                                about={el.about}
                                repoURL={el.repoURL}
                                appURL={el.appURL}
                                imgURL={el.imgURL}
                                key={index}
                            />
                        })
                    }
                </div>
            </CardContainer>
            <div className="uk-text-center">
                <a href="https://github.com/julieritz?tab=repositories" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Click Here to See All of My Projects</button>
                </a>
            </div>
        </Background>
    )
};

export default Portfolio;