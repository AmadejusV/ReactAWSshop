import { useEffect, useState } from "react";
import Counter from "../common/Counter";

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
    <ul>
      {products.map((i) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
}

export default Products;
