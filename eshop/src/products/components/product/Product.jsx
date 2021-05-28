import React from "react";
import { Link } from "react-router-dom";

function Product({ image, title, price, id }) {
  return (
    <li className="p-4">
      <div className="bg-white border shadow-sm rounded w-64 h-80 p-2">
        <div className="h-3/4">
          <img src={image} alt={title} className="max-h-full m-auto" />
        </div>
        <div className="text-center text-lg font-semibold mt-1">{price}$</div>
        <div
          className="text-center text-lg truncate mt-1 font-bold"
          title={title}
        >
          {title}
        </div>
        <div>
          <Link to={`products/${id}`}>View</Link>
        </div>
      </div>
    </li>
  );
}

export default Product;
