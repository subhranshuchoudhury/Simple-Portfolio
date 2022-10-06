import React from "react";
import ProjectCard from "./Card/ProjectCard";
const MyProjects = () => {
  return (
    <>
      <h2 style={{ textAlign: "right" }} className="sectionHeading">
        Projects
      </h2>
      <hr className="rightHrRed"></hr>
      <div className="mainProjectHolder">
        <ProjectCard
          Name={"Anonymous Chat App"}
          Logo={"githubLogo.png"}
          projectLink={"https://test.com"}
          desc={"Chat anonymously$JS | NODE JS | HTML | CSS"}
        />

        <ProjectCard
          Name={"Anonymous Chat App"}
          Logo={"githubLogo.png"}
          projectLink={"https://test.com"}
          desc={"Chat anonymously$JS | NODE JS | HTML | CSS"}
        />

        <ProjectCard
          Name={"Anonymous Chat App"}
          Logo={"githubLogo.png"}
          projectLink={"https://test.com"}
          desc={"Chat anonymously$JS | NODE JS | HTML | CSS"}
        />

        <ProjectCard
          Name={"Anonymous Chat App"}
          Logo={"githubLogo.png"}
          projectLink={"https://test.com"}
          desc={"Chat anonymously$JS | NODE JS | HTML | CSS"}
        />

        <ProjectCard
          Name={"Anonymous Chat App"}
          Logo={"githubLogo.png"}
          projectLink={"https://test.com"}
          desc={"Chat anonymously$JS | NODE JS | HTML | CSS"}
        />

        <ProjectCard
          Name={"Anonymous Chat App"}
          Logo={"githubLogo.png"}
          projectLink={"https://test.com"}
          desc={"Chat anonymously$JS | NODE JS | HTML | CSS"}
        />
      </div>
    </>
  );
};

export default MyProjects;
