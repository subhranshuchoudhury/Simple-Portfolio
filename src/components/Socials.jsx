import React from "react";
import SocialCard from "./Card/SocialCard";
const Socials = () => {
  return (
    <>
      <h2 style={{ textAlign: "left" }} className="sectionHeading">
        Socials
      </h2>
      <hr className="leftHrRed"></hr>
      <SocialCard
        handleName={"Gmail"}
        iconLink={"gmailLogo.png"}
        listItems={"subhransuchoudhury00@gmail.com"}
        socialLink={"mailto:subhransuchoudhury00@gmail.com"}
        barColor={"red"}
      />

      <SocialCard
        handleName={"LinkedIn"}
        iconLink={"linkedIn.png"}
        listItems={"https://www.linkedin.com/in/subhranshusekharchoudhury/"}
        socialLink={"https://www.linkedin.com/in/subhranshusekharchoudhury/"}
        barColor={"skyblue"}
      />

      <SocialCard
        handleName={"Github"}
        iconLink={"githubLogo.png"}
        listItems={"github.com/subhranshuchoudhury"}
        socialLink={"https://github.com/subhranshuchoudhury"}
        barColor={"black"}
      />
    </>
  );
};

export default Socials;
