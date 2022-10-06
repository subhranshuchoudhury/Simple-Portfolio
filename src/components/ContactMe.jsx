import React from "react";

const ContactMe = () => {
  return (
    <>
      <h2 style={{ textAlign: "right" }} className="sectionHeading">
        Contact Me
      </h2>
      <hr className="rightHrRed"></hr>
      <div className="iframeContainer">
        <a
          className="anchorHide"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeUnyoYucjPyFEsQ9QLg7XA8YIPdMdEVd5uWYau-s9Jyo5wHg/viewform"
        >
          <img
            className="contactMeLogo"
            src="images/contactMeLogo.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default ContactMe;
