import React from "react";
import "./portfolio.css";
import { data } from "./data";
import { GiFireworkRocket } from "react-icons/gi";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section__icon">
        <div className="icon__circle">
          <GiFireworkRocket />
        </div>
      </div>
      <h5>Not yet Convienced?</h5>
      <h2>Check My Recent Work</h2>
      <div className="container portfolio__container">
        {data.map(({ title, img, git, demo }, i) => (
          <article className="portfolio__item" key={i}>
            <div className="portfolio__item__img">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item__cta">
              <a href={git} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
      <br />
      <br />
      <h2>And some contributions here and there...</h2>
    </section>
  );
};

export default Portfolio;
