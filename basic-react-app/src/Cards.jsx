import "./Cards.css";
import Price from "./Price";

function Cards({ title,idx }) {
  let oldPrices = ["269900", "26900", "45900", "169900"];
  let newPrices = ["₹2,49,900", "₹24,900", "₹40,000", "₹1,59,900"];

  let description = ["Ultimate power for coding, design, and creativity — lightning speed with Apple Silicon.","Immersive sound, noise cancellation, and perfect focus for work or music", "Smart fitness, health tracking, and seamless iPhone integration for everyday balance and productivity.", "Stunning design, A17 Pro chip — the ultimate phone for work and creativity."]
  return (
    <>
      <div className="card">
        <h3>{title}</h3>
        <p><b>Description : </b>{description[idx]}</p>
        <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
      </div>
    </>
  );
}

export default Cards;
