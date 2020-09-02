import React from "react";
import Nav from "../components/Nav";
import HomeTitle from "../components/HomeTitle";
import Section from "../components/Section";
import Background from "../components/Background";
import imageURL from "../assets/images/background/flowers-left.jpg";

function About() {
    return (
        <Background image={imageURL}>
            <Nav />
            <HomeTitle />
            <Section />
        </Background>
    )
};

export default About;