import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Ticket
      </p>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
