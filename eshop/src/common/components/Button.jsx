import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const defaultClasses = "text-blue-400 hover:bg-gray-50 p-1";

function Button({ className, children, to }) {
  const mergedClasses = clsx(defaultClasses, className);

  if (to) {
    return (
      <Link to={to} className={mergedClasses}>
        {children}
      </Link>
    );
  }

  return <button className={mergedClasses}>{children}</button>;
}

export default Button;
