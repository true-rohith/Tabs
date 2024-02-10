import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import HTMLHeadingElement from "./components/HeadingBottomBorder";
import Company from "./components/Company";
import data from "./Data";
import About from "./components/About";

function App() {
  const [value, setValue] = useState(0);

  const { title, company, dates, duties } = data[value];

  return (
    <>
      <div className="container">
        <Heading />
        <HTMLHeadingElement />
        <div className="sub-container">
          <div className="sub-container-left">
            {data.map((obj, index) => (
              <Company
                setValue={setValue}
                index={index}
                key={obj.id}
                classy={` company-name ${index === value && "active-btn"}`}
                company={obj.company}
              ></Company>
            ))}
          </div>
          <div className="sub-container-right">
            <About
              title={title}
              company={company}
              dates={dates}
              duties={duties}
            ></About>
          </div>
        </div>
        <div className="button">more info</div>
      </div>
    </>
  );
}

export default App;
