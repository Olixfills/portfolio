/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        OLA-ONI
      </a>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/oni-abraham-3539321a2/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialLinkedinCircular />
        </a>
        <a href="https://github.com/Olixfills" target="_blank" rel="noreferrer">
          <TiSocialGithubCircular />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
