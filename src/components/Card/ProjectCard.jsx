import React from "react";

const ProjectCard = (props) => {
  const projectName = props.Name;
  const projectLogo = props.Logo;
  const projectLink = props.projectLink;
  const projectDesc = props.desc.split("$");
  return (
    <div className="projectHolder">
      <a className="anchorHolder" href={projectLink}>
        <img
          className="projectLogo"
          src={`images/${projectLogo}`}
          alt="project_logo"
        />
      </a>

      <div className="projectName">
        <a className="anchorHide" href={projectLink}>
          {projectName}
        </a>
      </div>
      <div>
        <ul style={{ borderLeft: `solid 2px #ECB365` }} className="aboutMeList">
          {projectDesc.map((d, index) => {
            return <li key={index}>{d}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
