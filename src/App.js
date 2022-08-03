import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  console.log(message);

  const handleClick = () => {
    setMessage("Lift off!!");
  };
  const changeMessage = () => {
    setMessage("Back to earth");
  };
  return (
    <div className="App">
      <h2>My Deployment</h2>
      <div>
        <button style={{ marginBottom: "1rem" }} onClick={handleClick}>
          Deploy! 🚀
        </button>
      </div>

      <button style={{ marginBottom: "1rem" }} onClick={changeMessage}>
        Land 🌎{" "}
      </button>

      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
