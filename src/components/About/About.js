import React from "react";
import "./About.css";
import me from "../../assets/me.jpg";

const About = () => {
  return (
    <div className="wrap">
      <div className="wrap-wrap">
        <h1 className="about-title">WHO AM I</h1>
        <div className="flex-container">
          <div className="flex-item-left">
            My name is Catherine Foye. I am 26 years old, I live in Denver, CO,
            and I'm a junior web developer. I'm a graduate of Purdue University
            with a BS in Aeronautical Engineering. I'm currently working as a
            controls engineer, which I began when the pandemic started in 2020.
            This field has made me realize how much I love technology and
            writing code. The idea of building my own websites and applications
            has always been interesting to me, so I finally decided to actually
            learn how to do just that. I enrolled in the full stack coding
            bootcamp with the University of Denver in February 2022. I hope to
            one day combine my love of aviation with my new passion for web
            development.
          </div>
          <div className="flex-item-right">
            <img
              src={me}
              alt="Portrait of Catherine"
              width="400"
              height="450"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
