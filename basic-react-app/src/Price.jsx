import "./Cards.css";

function Price({ oldPrices, newPrices }) {
  return (
    <div className="price-section">
      <span className="old-price">₹{oldPrices}</span>
      <span className="new-price">{newPrices}</span>
    </div>
  );
}

export default Price;
