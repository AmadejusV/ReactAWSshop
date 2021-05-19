import { useEffect, useState } from "react";
import Counter from "../common/Counter";
import Product from "../product/product";

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
        <Product key={i.id} image={i.image} price={i.price} title={i.title} />
      ))}
    </ul>
  );
}

export default Products;
