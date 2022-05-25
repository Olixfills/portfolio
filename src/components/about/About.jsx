import React from "react";
import "./about.css";
import Me from "../../assets/olix-headshot.png";
import { FaUserSecret } from "react-icons/fa";

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
        <div className="about__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint hic
          libero, voluptate eos culpa animi aspernatur? Dolor esse recusandae
          saepe? Rem accusantium nulla assumenda, recusandae dolores unde est
          explicabo. Necessitatibus, quos mollitia voluptate inventore sequi
          impedit maiores ea repellendus officiis explicabo, architecto
          reiciendis harum accusamus, nostrum soluta natus veniam ex. Neque
          inventore necessitatibus iste culpa at, veniam commodi fugiat. Maxime
          harum soluta architecto explicabo dolores! Reprehenderit dignissimos,
          saepe similique aspernatur cupiditate facere nisi eaque adipisci in
          nobis accusamus, porro illo vitae eius doloribus incidunt explicabo
          necessitatibus temporibus esse molestias. Quae labore expedita ab
          repellendus vero ut delectus assumenda fugiat nesciunt tempora
          explicabo debitis obcaecati autem est quas quod alias esse dolorum et
          sapiente ea itaque, accusantium sit aut. Ipsum? Sapiente repellendus
          consequuntur doloribus expedita natus a ipsa perspiciatis laudantium
          deleniti voluptates, molestiae nisi magnam impedit incidunt tenetur,
          rerum nam placeat labore! Iusto id esse incidunt, quaerat quidem
          aspernatur repudiandae? Officiis ea voluptatibus corrupti, optio nihil
          itaque recusandae distinctio libero eius quasi rerum voluptates beatae
          reiciendis magnam labore laborum dolor! Eligendi, consequatur deserunt
          unde nam nobis dolorum illo minima enim! Nostrum, autem. Maiores fugit
          optio ex aperiam voluptatum unde, aliquid alias pariatur? Molestias
          repudiandae odit recusandae corrupti illo praesentium minus ipsum,
          doloremque officiis, in molestiae dignissimos, blanditiis tempora
          autem esse. Nihil fugiat, sapiente ad dignissimos dolorum animi vero
          nesciunt dolore reiciendis ipsam expedita veritatis aut totam quaerat
          nisi? Nihil quas alias beatae modi neque saepe provident explicabo
          rerum corrupti facere. Quia beatae ab velit reiciendis tempora ipsa
          vel et adipisci quisquam voluptatum, autem, sint incidunt doloremque
          aliquid rerum, dignissimos provident. Odio esse quibusdam sint iusto
          maxime exercitationem nihil laboriosam quidem. Animi eaque eius id?
          Blanditiis autem debitis amet aut hic cum reiciendis quas illo!
          Corporis placeat qui quas voluptas aliquid culpa atque architecto
          voluptatem, veniam, exercitationem odit mollitia possimus quos.
        </div>
      </div>
    </section>
  );
};

export default About;
