import {
  MenuAlt3Icon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAuthPopup,
  openAuthPopup,
  selectAuthPopup,
} from "../features/auth/authPopupSlice";

import LoginPopup from "./auth/LoginPop";
import OptionUser from "./auth/OptoinUser";
import Cart from "./cart/Cart";
import CartHeader from "./CartHeader";
// import { useState } from "react";

const HeaderV2 = ({ cart }) => {
  const queryClient = useQueryClient();

  const authPopup = useSelector(selectAuthPopup);
  const dispatch = useDispatch();
  const openPopupHanelder = () => {
    dispatch(openAuthPopup());
  };
  const closePopupHandler = () => {
    dispatch(closeAuthPopup());
  };

  return (
    <>
      {authPopup && <LoginPopup closePopupHandler={closePopupHandler} />}
      {/* <Cart/> */}
      <nav className="w-full bg-slate-50/90 backdrop-blur-sm  text-gray-700 py-4 md:py-0 sticky top-0 z-40">
        <div className="flex flex-wrap items-center  px-4 mx-auto h-16 justify-between sm:px-6  lg:max-w-full lg:px-8 ">
          <a to="/" className="text-2xl font-bold cursor-pointer">
            CustomCloth
          </a>

          <div className="flex flex-grow mt-2 md:flex-grow-0 w-full order-last  md:order-none  items-center space-x-2 md:w-6/12 lg:w-4/12 ">
            <input
              name="search"
              type="text"
              placeholder="ค้นหาสินค้า..."
              className="ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-gray-300 px-4 py-1 w-full"
            />
            <SearchIcon className="h-6 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-900" />
          </div>
          <div className="flex space-x-6">
            {/* <CartHeader /> */}
            <Link href={"/cart"}>
              <a className="relative h-6 w-6 block cursor-pointer transition-all duration-100 transform hover:scale-125 hover:text-gray-900">
                <ShoppingBagIcon />
                <span
                  className="absolute left-3 bottom-3 inline-flex items-center justify-center px-2 py-1 
              mr-2 text-xs font-bold leading-none text-black  bg-white rounded-full border border-gray-700"
                >
                  {cart?.totalQuantity}
                </span>
              </a>
            </Link>
            {queryClient.getQueryData(["auth"]) ? (
              // <div>{queryClient.getQueryData(["auth"]).user?.username}</div>
              <OptionUser />
            ) : (
              <UserIcon
                className="h-6 w-6 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-900"
                onClick={() => openPopupHanelder()}
              />
            )}
            {/* <MenuAlt3Icon className="cursor-pointer h-6 w-6 md:hidden block" /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderV2;
