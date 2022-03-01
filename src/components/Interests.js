import React from "react";
import classes from "./Main.module.css";

export default function Interests() {
  return (
    <section className={classes.interestsSection}>
      <h4 className={classes.interestsTitle}>Interests</h4>
      <p className={classes.interestsDescription}>
        Travelling, I love to visit new places, meet new people and understand
        what is the world made of.
        <br />
        Love to try different cuisines and wines. Coffee fanatic. Sports and
        technology enthusiast.{" "}
      </p>
    </section>
  );
}
