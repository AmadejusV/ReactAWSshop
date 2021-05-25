import { useEffect, useState } from "react";
import ProductCard from "./components/product/ProductCard.jsx";

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
        <li className="p-5">
          <ProductCard
            key={i.id}
            id={i.id}
            image={i.image}
            price={i.price}
            title={i.title}
            className={"w-64 h-80"}
            isRounded
          />
        </li>
      ))}
    </ul>
  );
}

export default Products;
