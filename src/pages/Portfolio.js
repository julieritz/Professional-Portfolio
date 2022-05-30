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