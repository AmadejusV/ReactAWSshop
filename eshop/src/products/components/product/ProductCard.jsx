import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const defaultClasses = "bg-white border shadow-sm p-2";

function ProductCard({
  image,
  title,
  price,
  id,
  className,
  children,
  isRounded,
}) {
  return (
    <div className={clsx(defaultClasses, className, isRounded && "rounded")}>
      {children}
      <div className="h-3/4">
        <img src={image} alt={title} className="max-h-full m-auto" />
      </div>
      <div
        className="text-center text-lg truncate mt-1 font-bold"
        title={title}
      >
        {title}
        <div className="text-center text-lg font-semibold mt-1">{price}$</div>
      </div>
      <div>
        <Link
          to={{
            pathname: `products/${id}`,
            state: { image, title, price, id },
          }}
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
