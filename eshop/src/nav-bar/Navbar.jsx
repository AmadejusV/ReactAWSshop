
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
          <NavItem key={nItem.route} {...nItem}></NavItem>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
