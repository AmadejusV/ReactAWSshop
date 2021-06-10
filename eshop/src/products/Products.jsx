import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import axios from "axios";
import { getProducts } from "../common/requests.js";
import Spinner from "../common/components/Spinner.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios(getProducts);

      setIsLoading(false);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Spinner text={`Fetching products`} />;
  }

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
