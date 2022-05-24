import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
