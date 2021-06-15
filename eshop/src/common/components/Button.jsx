import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const initialClasses = "p-1 focus:outline-none rounded font-semibold";
const typeClassMap = {
  default: "text-blue-400 hover:bg-gray-50",
  primary: "text-white bg-blue-400",
};

function Button({ type = "default", className, children, to, onClick }) {
  const mergedClasses = clsx(initialClasses, typeClassMap[type], className);

  if (to) {
    return (
      <Link to={to} className={mergedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
