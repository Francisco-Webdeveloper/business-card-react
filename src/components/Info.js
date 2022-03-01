import React from "react";
import classes from "./Info.module.css";
import profilePicture from "../images/profile.jpeg";
import emailIcon from "../icons/email.png";
import linkedinIcon from "../icons/linkedin.png";

export default function Info() {
  return (
    <header>
      <img
        className={classes.profilePicture}
        src={profilePicture}
        alt="profile-pic"
      />
      <h3 className={classes.name}>Francisco Santos</h3>
      <p className={classes.role}>Web Developer</p>
      <p className={classes.website}>francisco.website</p>
      <div className={classes.buttons}>
        <button className={classes.emailBtn} type="submit">
          <img src={emailIcon} />
          <span>Email</span>
        </button>
        <button className={classes.linkedinBtn} type="submit">
          <img src={linkedinIcon} />
          <span>LinkedIn</span>
        </button>
      </div>
    </header>
  );
}
