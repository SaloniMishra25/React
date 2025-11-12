import Cards from "./Cards";

function AmazonCard() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#e63946", fontWeight: "600" }}>
         Blockbuster Tech Sale — Upgrade Your Gear Now!
      </h1>
      <br />
      <div style={styles}>
        <Cards title="MacBook Pro M3" idx={0} />
        <Cards title="AirPods Pro" idx={1} />
        <Cards title="Apple Watch Series 9" idx={2} />
        <Cards title="iPhone 15 Pro Max" idx={3} />
      </div>
      <br />
      <h1 style={{ textAlign: "center" }}>
        <a
          href="https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007185", textDecoration: "none" }}
        >
          Shop More on Amazon →
        </a>
      </h1>
    </>
  );
}

export default AmazonCard;
