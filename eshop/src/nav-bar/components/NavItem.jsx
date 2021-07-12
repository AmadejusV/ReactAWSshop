import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const initialClasses = "p-2 font-semi text-2xl hover:text-white";

function NavItem({ content, route, className }) {
  return (
    <li className={clsx(initialClasses, className)}>
      <Link to={route}>{content}</Link>
    </li>
  );
}

export default NavItem;
