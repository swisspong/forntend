import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Cart = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div
      className={`bg-gray-50 shadow-2xl  z-50 fixed w-full md:w-auto inset-y-0 right-0 px-14 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-1000`}
    >
      <div className="h-full w-full md:w-screen md:max-w-md">
        <div className="flex justify-end py-5">
          <XIcon className="h-6 w-6 cursor-auto"/>
        </div>
        <div className="px-4 sm:px-6 flex-1">
          <a className="text-2xl">Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
