import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  console.log(message);

  const buttonStyles = {
    marginBottom: "1rem",
    padding: "1rem",
    fontSize: "1.5rem",
    width: "40vw",
    borderRadius: "10px",
    backgroundColor: "hotpink",
    color: "white",
    fontWeight: "bold",
    border: "5px solid white",
  };

  const handleClick = () => {
    setMessage("Lift off!!");
  };
  const changeMessage = () => {
    setMessage("Back to earth");
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ marginBottom: "5rem", color: "white" }}>My Deployment</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <button style={buttonStyles} onClick={handleClick}>
          Deploy! 🚀
        </button>

        <button style={buttonStyles} onClick={changeMessage}>
          Land 🌎{" "}
        </button>
      </div>

      <div>
        <p
          style={{
            fontWeight: "light",
            fontSize: "2rem",
            lineHeight: ".5rem",
            color: "whitesmoke",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default App;
