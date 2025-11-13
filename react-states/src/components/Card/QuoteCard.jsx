import LikeButton from "./LikeButton";

export default function QuoteCard({ quote, author }) {
  return (
    <div
      style={{
        width: "250px",
        height:"120px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        margin: "15px",
        transition: "transform 0.2s ease",
      }}
    >
      <p style={{ fontStyle: "italic", color: "#444", marginBottom: "10px" }}>
        "{quote}"
      </p>

      <p style={{ color: "#777", fontSize: "14px", marginBottom: "15px" }}>
        {author}
      </p>

      <LikeButton />
    </div>
  );
}
