import React from "react";

const AboutMe = () => {
  return (
    <>
      <h2 className="sectionHeading">About</h2>
      <hr className="rightHrRed"></hr>
      <div className="achieveHolder">
        <div className="achievementLogoHolder">
          <img
            className="achievementLogo"
            src="/images/myProfile.png"
            alt="github_logo"
          />
        </div>
        <div>
          <ul
            style={{ borderLeft: "solid 2px #ECB365" }}
            className="aboutMeList"
          >
            <li>Subhranshu Choudhury</li>
            <li>
              <b>Full Stack Developer | Ethical Hacker</b>
            </li>
            <li>
              Experience <b>1 Year</b>
            </li>
          </ul>
        </div>
        <br></br>
        <div>
          <ul
            style={{ borderLeft: "solid 2px #ECB365" }}
            className="aboutMeList"
          >
            <li>SOA | Institute of Technical Education & Research</li>
            <li>2022 - 2026</li>
            <li>
              Branch <b>CSE</b>
            </li>
          </ul>
        </div>
        <br></br>
        <div>
          <ul
            style={{ borderLeft: "solid 2px #ECB365" }}
            className="aboutMeList"
          >
            <li>India</li>
            <li>Odisha, Kendrapara</li>
            <li>
              Pincode <b>754224</b>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
