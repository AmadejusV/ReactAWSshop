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
    <ul className="flex flex-wrap">
      {products.map((i) => (
        <li key={i.id} className="p-4">
          <div className="bg-white border shadow-sm rounded w-64 h-80"></div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
