import "./Product.css";

function Product({ title, price, feature, feature2 }) {
  return (
    <>
      <div className="box">
        <h1>{title}</h1>
        {price > 30000 ? <p> "Discount of 5%"</p> : null}
        <ul>
          <li>Price : {price}</li>

          <li>{feature}</li>
          <li>{feature2?.b}</li>
        </ul>
      </div>
    </>
  );
}

export default Product;
