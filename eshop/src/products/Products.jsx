import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson = await response.json();
      console.log(responseJson);

      setProducts(responseJson);
    };

    getProducts();
  }, []);

  return (
    <ul className="flex flex-wrap">
      {products.map((i) => (
        <ProductCard
          key={i.id}
          id={i.id}
          title={i.title}
          price={i.price}
          image={i.image}
        ></ProductCard>
      ))}
    </ul>
  );
}

export default Products;
