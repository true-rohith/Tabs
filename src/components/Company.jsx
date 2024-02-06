import React from "react";
import "./Company.css";
function Company({ setValue, company, classy, index }) {
  return (
    <div className={classy}>
      <h4 onClick={()=>setValue(index)}>{company}</h4>
    </div>
  );
}

export default Company;
