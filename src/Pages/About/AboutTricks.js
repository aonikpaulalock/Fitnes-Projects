import React from 'react';
import shape from "../../Asset/Service/Shape.png"
import AboutTrick from './AboutTrick';
import "../../Styles/Aboutpages/AboutTricks.css"
const tricks = [
  {
    id: 1,
    img: "https://i.ibb.co/yWmmBmQ/about-Tricks1.png",
    tainer: "Jerom Bell",
    name: "GYM & CROSSFIT & YOGA",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    skills:[
      "Over 10 years of experience",
      "Coached 2,000+ people",
      "Bachelors in nutrition"
    ]
  },
  {
    id: 2,
    img: "https://i.ibb.co/9srMx7d/about-Tricks2.png",
    tainer: "Alfonso Stanton",
    name: "GYM & CROSSFIT & YOGA",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    skills:[
      "Over 10 years of experience",
      "Coached 2,000+ people",
      "Bachelors in nutrition"
    ]
  },
  {
    id: 3,
    img: "https://i.ibb.co/WyvV8St/about-Tricks3.png",
    tainer: "Jaxson Saris",
    name: "GYM & CROSSFIT & YOGA",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    skills:[
      "Over 10 years of experience",
      "Coached 2,000+ people",
      "Bachelors in nutrition"
    ]
  }
]
const AboutTricks = () => {
  return (
    <div className="container">
      <div className="tricks-container">
        <div className="About-Tricks-Position">
          <h1 className="About-Tricks tricks-heading">Read our tips and <br /> tricks
            <img src={shape} alt="" className="about-tricks-shape img-fluid" />
          </h1>
        </div>
        <div className="row about-tricks">
          {
            tricks.map(trick => <AboutTrick
              key={trick.id}
              trick={trick}
            ></AboutTrick>)
          }
        </div>
      </div>
    </div>
  );
};

export default AboutTricks;