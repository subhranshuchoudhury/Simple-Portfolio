import React from "react";

const AboutMe = () => {
  return (
    <>
      <h2 className="sectionHeading">About</h2>
      <hr className="rightHrRed"></hr>
      <div className="aboutMeContainer">
        <ul className="aboutMeList">
          <li>
            <a className="anchorHide" href="https://about.me/subhranshu">
              Subhranshu Choudhury
            </a>
          </li>
          <li>Full Stack Developer | WhiteHat Hacker</li>
          <li>Student with 1 year of experience.</li>
        </ul>
      </div>
    </>
  );
};

export default AboutMe;
