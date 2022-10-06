import React from "react";

const ContactMe = () => {
  return (
    <>
      <h2 style={{ textAlign: "right" }} className="sectionHeading">
        Contact Me
      </h2>
      <hr className="rightHrRed"></hr>
      <div className="iframeContainer">
        <iframe
          title="ContactMe"
          src={
            "https://docs.google.com/forms/d/e/1FAIpQLSeUnyoYucjPyFEsQ9QLg7XA8YIPdMdEVd5uWYau-s9Jyo5wHg/viewform?embedded=true"
          }
          width={"640"}
          height={"1400"}
          frameborder={"0"}
          marginheight={"0"}
          marginwidth={"0"}
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default ContactMe;
