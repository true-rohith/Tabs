import React from "react";
import "./About.css";
import { FaAngleDoubleRight } from "react-icons/fa";
function About({ title, company, dates, duties }) {
  return (
    <>
      <div className="about-container">
        <h1>{title}</h1>
        <h2>{company}</h2>
        <h3>{dates}</h3>
        {duties.map((para) => {
          return (
            <div className="about-para">
              <p id="about-icon">
                <FaAngleDoubleRight />
              </p>
              <p id="para-space">{para}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default About;
