/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.css";
import { SiHomebridge } from "react-icons/si";
import { FaUserSecret } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { GiFireworkRocket } from "react-icons/gi";
import { TiMessageTyping } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <SiHomebridge />
      </a>
      <a href="#about">
        <FaUserSecret />
      </a>
      <a href="#experience">
        <BiBookReader />
      </a>
      <a href="#portfolio">
        <GiFireworkRocket />
      </a>
      <a href="#contact">
        <TiMessageTyping />
      </a>
    </nav>
  );
};

export default Navbar;
