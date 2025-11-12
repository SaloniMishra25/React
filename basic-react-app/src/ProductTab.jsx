import Product from "./Product";

function ProductTab() {
  let option1 = ["durable", "fast", "hi-tech"];
  let option2 = { a: "good", b: "durable" };
  return (
    <>
      <Product title="Tablet" price={40000} />
      <Product title="Phone" price={30000} feature={option1} />
      <Product title="Laptop" price={90000} feature2={option2} />
    </>
  );
}

export default ProductTab;
