import React from "react";
import Button from "../../common/components/Button";
import Card from "../../common/components/Card";

function ProductCard({ id, image, title, price }) {
  return (
    <li className="p-5">
      <Card className={"w-64 h-80"} isRounded>
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
              state: { image, title, price, id },
            }}
          >
            View
          </Button>
        </div>
      </Card>
    </li>
  );
}

export default ProductCard;
