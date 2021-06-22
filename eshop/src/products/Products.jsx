import { useEffect,} from "react";
import ProductCard from "./components/ProductCard.jsx";
import { getProducts } from "../common/requests.js";
import Spinner from "../common/components/Spinner.jsx";
import useApi from "../common/hooks/useApi.jsx";

function Products() {

  const {data: products, isLoading, call} = useApi();

  useEffect(()=>{
    console.log('calling products');
    call(getProducts);
  },[]); //eslint-disable-line

  if (isLoading  || !products) {
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
