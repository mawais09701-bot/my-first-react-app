import { useState } from "react";
import "./App.css";

function App() {
  const [heading, setHeading] = useState("Muhammad kHANu");

  function handleClick(){
    setHeading("Muhammad Ahmad")
  }

  return (
    <>
      <button onClick={handleClick}>Change Heading</button>

      <h1>{heading}</h1>
    </>
  );
}

export default App;
