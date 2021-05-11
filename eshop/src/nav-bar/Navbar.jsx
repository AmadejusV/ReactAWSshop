import { Link } from "react-router-dom";
import NavItem from "./components/NavItem";

const navItems = [
  { text: "PRODUCTS", route: "/" },
  { text: "VISION", route: "/vision" },
];

function Navbar() {
  return (
    <nav className="bg-blue-300">
      <ul className="flex">
        {navItems.map((nItem) => (
          <NavItem {...nItem}></NavItem>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
