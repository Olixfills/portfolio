import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assets/olix.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div id="#intro" className="container header__container">
        <h5>Hi there, I'm</h5>
        <h1>Ola,</h1>
        <h5 className="text-light">I'm a Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="ola-oni" />
        </div>
      </div>
    </header>
  );
};

export default Header;
