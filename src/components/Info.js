import React from "react";
import profilePicture from "../images/profile.jpeg";
import emailIcon from "../icons/email.png";
import linkedinIcon from "../icons/linkedin.png";

export default function Info() {
  return (
    <header>
      <img className="profilePicture" src={profilePicture} alt="profile-pic" />
      <h3 className="name">Francisco Santos</h3>
      <p className="role">Web Developer</p>
      <p className="website">francisco.website</p>
      <div className="buttons">
        <button className="emailBtn" type="submit">
          <img src={emailIcon} />
          <span>Email</span>
        </button>
        <button className="linkedinBtn" type="submit">
          <img src={linkedinIcon} />
          <span>LinkedIn</span>
        </button>
      </div>
    </header>
  );
}
