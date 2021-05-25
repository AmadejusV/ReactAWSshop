import React from "react";
import Button from "../../common/Button";
import ProductCard from "./product/ProductCard";

function ProdCard({ id, image, title, price }) {
  return (
    <li className="p-5">
      <ProductCard className={"w-64 h-80"} isRounded>
        <div className="h-3/4 flex">
          <img src={image} alt={title} className="max-h-full m-auto" />
        </div>
        <div className="text-center text-lg truncate font-bold" title={title}>
          {title}
          <div className="text-center font-semibold">{price}$</div>
        </div>
        <div className="flex justify-center ">
          <Button
            to={{
              pathname: `products/${id}`,
              // state: { image, title, price, id },
            }}
          >
            View
          </Button>
        </div>
      </ProductCard>
    </li>
  );
}

export default ProdCard;
