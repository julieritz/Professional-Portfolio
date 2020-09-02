import React from "react";
import "./style.css";
import Header from "../Header";
import profilePic from "../../assets/images/circle-cropped.png";

function Section() {
    return (
        <div className="uk-container">
            <div className="uk-text-center">
                <div id="about-me-container">
                    <div id="about-me">
                        <Header title="Hi There!" />
                        <img src={profilePic} alt="Julie Ritz" className="profilepic animate__animated animate__bounce animate__delay-3s" style={{ width: 150 }} />
                        <p className="uk-text-justify about-me-desc">
                            Thanks for getting to know more about me and what I do. Although I'm Seattle based, I'm a Boston native who will let you know how much
                            better the bagels and pizza are on the east coast within 5 minutes of meeting me. While I'm a marketer  and coder by
                            day, I also enjoy baking/cooking, hiking and traveling. I've lived all over the world including in
                            South Korea and Spain and plan to make it to Antarctica as soon as I can.
                        <br /><br />
                            I'm in a unique position with my background as a marketer and coder 
                            because I can't just technically build beautiful websites, 
                            I also deisgn creative, write copy and create the entire user experience from start to finish.
                            Need help writing or launching a blog? I've got you. Looking for a refresh of your creative materials? Sign me up. Need help with your analytics or lead generation? I'm just as tactical as I am artistic.
                            I've helped companies drive revenue growth through customer aquisition by implementing new campaigns such as SEM/PPC, retargeting and SEO.
                        <br /><br />    
                            I'm happy to work with you in any capacity of my skills.
                            I can't wait to build customer-centric websites that are as beautiful as they are useful, and I look forward to what we can do together.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Section;