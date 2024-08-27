import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

function Home() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getproducts() {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      if (data) {
        setproducts(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e.message);
    }
  }
  console.log(products);
  useEffect(() => {
    getproducts();
  }, []);

  if (error) {
    return <h1>Error is {error}</h1>;
  }

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((product) => <ProductTile product={product} />)
            : null}
        </div>
      )}
    </div>
  );
}

export default Home;
