import React from "react";
import SocialCard from "./Card/SocialCard";
const MyAchievement = () => {
  return (
    <>
      <h2 style={{ textAlign: "left" }} className="sectionHeading">
        Achievement
      </h2>
      <hr className="leftHrRed"></hr>

      <SocialCard
        handleName={"Github"}
        iconLink={"githubLogo.png"}
        listItems={"50+ Repositories$Projects with MERN"}
        socialLink={"https://github.com/subhranshuchoudhury?tab=repositories"}
        barColor={"black"}
      />

      <SocialCard
        handleName={"HackerRank"}
        iconLink={"HRLogo.png"}
        listItems={"SQL ⭐⭐⭐⭐$C ⭐⭐"}
        socialLink={"https://www.hackerrank.com/subhranshusekhar"}
        barColor={"green"}
      />
    </>
  );
};

export default MyAchievement;
