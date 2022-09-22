
import { ShoppingBagIcon } from "@heroicons/react/outline";
import React from "react";

const CartHeader = () => {
 
  return (
    <a
      to="/cart"
      className="relative h-6 w-6 block cursor-pointer transition-all duration-100 transform hover:scale-125 hover:text-gray-900"
    >
      <ShoppingBagIcon />
      <span
        className="absolute left-3 bottom-3 inline-flex items-center justify-center px-2 py-1 
    mr-2 text-xs font-bold leading-none text-black  bg-white rounded-full border border-gray-700"
      >
        9
      </span>
    </a>
  );
};

export default CartHeader;
