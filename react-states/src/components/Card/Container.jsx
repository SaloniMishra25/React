import QuoteCard from "./QuoteCard";

function Container() {
  const quotes = [
    { quote: "Believe in yourself and all that you are." },
    { quote: "Dream big, work hard, stay humble." },
    { quote: "Every day is a second chance." },
    { quote: "Do what makes your soul shine." },
    { quote: "Stay positive, work hard, make it happen." },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "50vh",
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
    
      <h1
        style={{
          marginBottom: "30px",
          color: "#333",
          fontSize: "2rem",
          letterSpacing: "1px",
        }}
      >
        Read. Feel. Like. Inspire. <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {quotes.map((item, index) => (
          <QuoteCard key={index} quote={item.quote} />
        ))}
      </div>
    </div>
  );
}

export default Container;
