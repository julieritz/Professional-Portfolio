import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CardContainer from "../components/CardContainer";
import Background from "../components/Background";
import SkillsCard from "../components/SkillsCard";
import { code, marketing, design, languages } from "../utils/skills";
import imageURL from "../assets/images/background/flowers-right.jpg";

function Skills(props) {
    return (
        <Background image={imageURL} >
            <Nav />
            <Header padding={70} title="Skills" />
            < hr />
            <div className="uk-text-center">
                <a href="https://julieritz.github.io/Portfolio/assets/images/Resume-2022.pdf" target="_blank" className="btn-link">
                    <button className="uk-button uk-button-default website-btn">Click Here to View My Resume</button>
                </a>
            </div>
            <CardContainer>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
                    <SkillsCard
                        skills={code}
                        title="Coding"
                        name="coding"
                    />
                    <SkillsCard
                        skills={marketing}
                        title="Marketing"
                        name="marketing"
                    />
                    <SkillsCard
                        skills={design}
                        title="Design"
                        name="design"
                    />
                </div>
            </CardContainer>
            <Header padding={70} title="Languages" />
            < hr />
            <CardContainer>
            <div className="uk-text-center">
                <div className="uk-child-width-1@m uk-grid-match" uk-grid="true" id="languages-section">
                    <SkillsCard
                        skills={languages}
                        name="languages"
                    />
                </div>
            </div>
            </CardContainer>
        </Background>
    )
};

export default Skills;