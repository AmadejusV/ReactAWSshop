import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import axios from "axios";
import { getProducts } from "../common/requests.js";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios(getProducts);

      // console.log(data);
      setProducts(data);
    };

    fetchProducts();
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
