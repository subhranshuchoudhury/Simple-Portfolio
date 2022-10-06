import React from "react";

const SocialCard = (props) => {
  const handleName = props.handleName;
  const iconLink = props.iconLink;
  const listItems = props.listItems.split("$");
  const barColor = props.barColor;
  const socialLink = props.socialLink;
  return (
    <>
      {/* holder */}
      <div className="achieveHolder">
        <div className="achievementLogoHolder">
          <a className="anchorHide" href={socialLink}>
            <img
              className="achievementLogo"
              src={`/images/${iconLink}`}
              alt="logo"
            />
          </a>
        </div>
        <div>
          <ul
            style={{ borderLeft: `solid 2px ${barColor}` }}
            className="aboutMeList"
          >
            <li>
              <a className="anchorHide" href={socialLink}>
                {handleName}
              </a>
            </li>
            {listItems.map((d, index) => {
              return <li key={index}>{d}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
