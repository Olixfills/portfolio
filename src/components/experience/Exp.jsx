import React from "react";
import "./exp.css";
import { skills } from "./Skills";
import { BiBookReader } from "react-icons/bi";

const Exp = () => {
  return (
    <section id="experience">
      <div className="section__icon">
        <div className="icon__circle">
          <BiBookReader />
        </div>
      </div>
      <h5>My Skills and Competencies</h5>
      <h2>What I Do</h2>
      <div className="container experience__container">
        <div className="exp__content">
          {skills.map((skill) => (
            <article className="exp__details" key={skill.title}>
              {skill.icon}
              <h4>{skill.title}</h4>
              <small className="text-light">{skill.exp}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exp;
