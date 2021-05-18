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
          <div className="bg-white border shadow-sm rounded w-64 h-80 p-2">
            <div className="h-3/4">
              <img src={i.image} alt={i.title} className="max-h-full m-auto" />
            </div>
            <div className="text-center text-lg font-semibold mt-1">
              {i.price}$
            </div>
            <div
              className="text-center text-lg truncate mt-1 font-bold"
              title={i.title}
            >
              {i.title}
            </div>
            <button>View</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
