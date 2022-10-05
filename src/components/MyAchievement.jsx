import React from "react";

const MyAchievement = () => {
  return (
    <>
      <div className="achievement">
        <h2 style={{ textAlign: "left" }} className="sectionHeading">
          Achievement
        </h2>
        <hr className="leftHrRed"></hr>

        {/* holder */}
        <div className="achieveHolder">
          <div className="achievementLogoHolder">
            <img
              className="achievementLogo"
              src="/images/githubLogo.png"
              alt="github_logo"
            />
          </div>
          <div>
            <ul
              style={{ borderLeft: "solid 2px black" }}
              className="aboutMeList"
            >
              <li>GitHub</li>
              <li>50+ Repositories</li>
              <li>
                Project with <b>MERN</b>
              </li>
            </ul>
          </div>
        </div>
        {/* holder */}
        <div className="achieveHolder">
          <div className="achievementLogoHolder">
            <img
              className="achievementLogo"
              src="/images/HRLogo.png"
              alt="hackerRank_logo"
            />
          </div>
          <div>
            <ul
              style={{ borderLeft: "solid 2px lightgreen" }}
              className="aboutMeList"
            >
              <li>HackerRank</li>
              <li>
                <b>SQL</b> ⭐⭐⭐⭐
              </li>
              <li>
                <b>C</b> ⭐⭐
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAchievement;
