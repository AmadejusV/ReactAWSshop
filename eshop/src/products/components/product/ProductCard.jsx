import React from "react";
import clsx from "clsx";

const defaultClasses = "bg-white border shadow-sm p-2";

function ProductCard({ className, children, isRounded }) {
  return (
    <div className={clsx(defaultClasses, className, isRounded && "rounded")}>
      {children}
    </div>
  );
}

export default ProductCard;
