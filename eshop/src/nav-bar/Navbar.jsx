import NavItem from "./components/NavItem";
import CartNavItem from "./components/CartNavItem";

const navItems = [
  { content: "PRODUCTS", route: "/" },
  { content: "VISION", route: "/vision" },
];

function Navbar() {
  return (
    <nav className="bg-blue-300">
      <ul className="flex">
        {navItems.map((nItem) => (
          <NavItem key={nItem.route} {...nItem}></NavItem>
        ))}
        <CartNavItem />
      </ul>
    </nav>
  );
}

export default Navbar;
