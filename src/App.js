import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Want some advice?");
  

  async function getAdvice(){
    const res = await  fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <>
      <div className="content">
        <h1 className="advice">{advice}</h1>
        <button type="button" onClick={getAdvice} className="btn btn-primary">
          Get advice
        </button>
      </div>
    </>
  );
}

export default App;
