import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-300">
      <ul className="flex">
        <li className="p-2 font-semi text-2xl hover:text-white">
          <Link to="/">Products</Link>
        </li>
        <li className="p-2 font-semi text-2xl hover:text-white">
          <Link to="/vision">Vision</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
