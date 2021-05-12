import React from "react";
import { Link } from "react-router-dom";

function NavItem({ route, text }) {
  return (
    <li className="p-2 font-semi text-2xl hover:text-white">
      <Link to={route}>{text}</Link>
    </li>
  );
}

export default NavItem;
