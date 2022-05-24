import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>A little about me..</h5>
      <h2>Let's meet Ola</h2>
      <div className="container about__container">
        <div className="about__img"></div>
        <div className="about__desc"></div>
      </div>
    </section>
  );
};

export default About;
