import React from "react";
import twitterIcon from "../icons/twitter.png";
import facebookIcon from "../icons/facebook.png";
import instagramIcon from "../icons/instagram.png";
import githubIcon from "../icons/github.png";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={classes.icons}>
        <a
          href="https://twitter.com/FranciscoLX81"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href="#">
          <img src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="#">
          <img src={instagramIcon} alt="instagram icon" />
        </a>
        <a
          href="https://github.com/Francisco-Webdeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </footer>
  );
}
