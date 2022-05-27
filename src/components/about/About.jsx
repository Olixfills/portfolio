import React from "react";
import "./about.css";
import Me from "../../assets/olix-headshot.png";
import { FaUserSecret, FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="about__icon">
        <div className="icon__circle">
          <FaUserSecret />
        </div>
      </div>
      <h5>A little about me..</h5>
      <h2>Meet Ola Oni</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={Me} alt="olix" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card one">
              <FaAward className="about__card__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card two">
              <FaUsers className="about__card__icon" />
              <h5>Clients</h5>
              <small>10+ satisfied</small>
            </article>

            <article className="about__card three">
              <VscFolderLibrary className="about__card__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            I am a front-end developer specializing in building exceptional
            digital experiences. i am passionate about building excellent
            software that improves the life of those around me. I love
            travelling, food (eaiting and cooking😉), watching movies and
            playing video games. Let's work together, it'll be a great
            experience I'm sure
          </p>
          <a href="#contact" className="btn btn-primary about__btn ">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
