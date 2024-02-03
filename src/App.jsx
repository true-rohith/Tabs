import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import HeadingBottomBorder from "./HeadingBottomBorder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Heading />
        <HeadingBottomBorder />
      </div>
    </>
  );
}

export default App;
