import { useState } from "react";
import "./LudoBoard.css";

export default function LudoBoard() {
  const [moves, setMoves] = useState({
    red: 0,
    blue: 0,
    orange: 0,
    green: 0,
  });

  const updateRed = () => setMoves((prev) => ({ ...prev, red: prev.red + 1 }));

  const updateBlue = () =>
    setMoves((prev) => ({ ...prev, blue: prev.blue + 1 }));

  const updateOrange = () =>
    setMoves((prev) => ({ ...prev, orange: prev.orange + 1 }));

  const updateGreen = () =>
    setMoves((prev) => ({ ...prev, green: prev.green + 1 }));

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100vh",
    minHeight: "70vh",
    backgroundColor: "#f4f6f8",
    fontFamily: "Poppins, sans-serif",
  };

  const boardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    backgroundColor: "#fff",
    border: "4px solid #ff4d4d",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const boxStyle = (color) => ({
    backgroundColor: color,
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    width: "120px",
    borderRadius: "10px",
    fontWeight: "bold",
    boxShadow: "inset 0 0 8px rgba(0,0,0,0.2)",
  });

  const buttonStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#000",
    border: "none",
    padding: "5px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "5px",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#ff4d4d", marginBottom: "20px" }}>
        {" "}
        Ludo Game Board
      </h1>
      <div style={boardStyle}>
        <div style={boxStyle("red")}>
          <p>Red: {moves.red}</p>
          <button style={buttonStyle} onClick={updateRed}>
            +1
          </button>
        </div>

        <div style={boxStyle("blue")}>
          <p>Blue: {moves.blue}</p>
          <button style={buttonStyle} onClick={updateBlue}>
            +1
          </button>
        </div>

        <div style={boxStyle("orange")}>
          <p>Orange: {moves.orange}</p>
          <button style={buttonStyle} onClick={updateOrange}>
            +1
          </button>
        </div>

        <div style={boxStyle("green")}>
          <p>Green: {moves.green}</p>
          <button style={buttonStyle} onClick={updateGreen}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
}
