import React from "react";

function About({ title, company, dates, duties }) {
  return (
    <>
      <h1>{title}</h1>
      <h1>{company}</h1>
      <h1>{dates}</h1>
      {duties.map((para) => {
        return <h4>$ {para}</h4>;
      })}
    </>
  );
}

export default About;
