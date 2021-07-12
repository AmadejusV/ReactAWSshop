import React, { useContext } from "react";
import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../common/assets/cart.svg";
import { CartContext } from "../../common/providers/CartProvider";

function CartIconWithNo() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <CartIcon className="w-8 h-8"></CartIcon>
      <span
        className="absolute text-yellow-400 text-xs font-bold"
        style={{ right: "35%", top: "25%" }}
      >
        {cart?.products?.length}
      </span>
    </>
  );
}

function CartNavItem() {
  return (
    <NavItem
      route="/cart"
      content={<CartIconWithNo />}
      className="ml-auto mr-2 relative"
    />
  );
}

export default CartNavItem;
