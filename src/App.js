import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");


  return (
    <>
      <div className="content">
        <h1 className="advice">Want some advice??</h1>
        <button type="button" className="btn btn-primary">
          Get advice
        </button>
      </div>
    </>
  );
}

export default App;
