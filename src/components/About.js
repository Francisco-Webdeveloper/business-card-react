import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <section>
      <h4 className={classes.aboutTitle}>About</h4>
      <p className={classes.aboutDescription}>
        I am a web developer fascinated by creating new things and valuable
        assets to help people and companies. I focus on the front-end as I have
        a passion for the visual and client-side of web applications.
      </p>
    </section>
  );
}
