import { useEffect, useState } from "react";
import ProductCard from "./components/product/ProductCard.jsx";
import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";

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
          <ProductCard className={"w-64 h-80"} isRounded>
            <div className="h-3/4 flex">
              <img src={i.image} alt={i.title} className="max-h-full m-auto" />
            </div>
            <div
              className="text-center text-lg truncate font-bold"
              title={i.title}
            >
              {i.title}
              <div className="text-center font-semibold">{i.price}$</div>
            </div>
            <div className="flex justify-center ">
              <Button
                to={{
                  pathname: `products/${i.id}`,
                  // state: { image, title, price, id },
                }}
              >
                View
              </Button>
            </div>
          </ProductCard>
        </li>
      ))}
    </ul>
  );
}

export default Products;
