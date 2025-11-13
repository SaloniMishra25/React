import { useState } from "react";
import "./Game.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Game({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="game">
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulation, you won!"}</h3>
    </div>
  );
}
