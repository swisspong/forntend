import { Dialog, Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";
import DialogCartItem from "./DialogCartItem";
import MyDialog from "./MyDialog";

const CartItem = ({ cartItem, removeCartItem, updateCartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-grow flex-col md:flex-row md:space-x-4 py-4">
          <div className="flex space-x-2 ">
            <div className="w-16 h-16">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  // src="https://images.pexels.com/photos/10681880/pexels-photo-10681880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  src={cartItem.product.productImage[0].image.path}
                  className="object-cover object-center"
                  alt="Person typing on a laptop keyboard"
                />
              </div>
            </div>
            <Link href={`/product/${cartItem.productId}`}>
              <a className="text-sm flex-grow  md:hidden">
                {cartItem.product.name}
              </a>
            </Link>
            <div className="flex md:hidden flex-col  justify-between space-y-2 text-sm">
              ${Number(cartItem.price).toFixed(2)}
            </div>
          </div>
          <div className="mt-2 md:mt-0 flex flex-col flex-grow text-base">
            <Link href={`/product/${cartItem.productId}`}>
              <a className="text-sm hidden md:block">{cartItem.product.name}</a>
            </Link>
            {/* <p class="text-sm">Vibrant Trainers</p> */}
            <Disclosure>
              {({ open }) => (
                <>
                  <div>
                    <Disclosure.Button className="flex justify-start items-center">
                      <legend className="text-xs ">Detail</legend>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-500 `}
                      />
                    </Disclosure.Button>
                  </div>
                  <Disclosure.Panel>
                    <dl className="ml-1 mt-1 space-y-1 text-xs text-gray-500">
                      {cartItem.cartItemDetail.map((cartItemDetail) => (
                        <div>
                          <dt className="inline">
                            {cartItemDetail.optionGroup.name}:
                          </dt>
                          <dd className="inline">
                            {cartItemDetail.option.name}
                          </dd>
                        </div>
                      ))}

                      {/* <div>
              <dt className="inline">Size:</dt>
              <dd className="inline">UK 10</dd>
            </div> */}
                    </dl>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* <div className="flex  flex-wrap items-center pb-1">
            <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
              Color
              <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
                red
              </span>
            </div>
            <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
              Color
              <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
                red
              </span>
            </div>
            <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
              Color
              <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
                red
              </span>
            </div>
            <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
              Color
              <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
                red
              </span>
            </div>
            <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
              Color
              <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
                red
              </span>
            </div>
          </div> */}
          </div>
          <div className="hidden md:block text-sm">
            <div>
              {/* <button
                onClick={() => setIsOpen(true)}
                class="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium block"
              >
                Edit
              </button> */}
              {/* <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} /> */}
              <DialogCartItem
                cartItem={cartItem}
                productId={cartItem.productId}
              />
              {/* <MyDisclosure/> */}
            </div>
            $
            {(
              Number(cartItem.price) +
              cartItem.cartItemDetail.reduce((acc, curr) => {
                return acc + Number(curr.price);
              }, 0)
            ).toFixed(2)}
            {}
            <small class="text-gray-500"> x{cartItem.quantity}</small>
            <br />= ${Number(cartItem.subTotal).toFixed(2)}
          </div>
        </div>
        <div className="flex flex-row h-9">
          <button
            className="flex border-accent-2 border p-1"
            onClick={() => {
              removeCartItem(cartItem.productId);
            }}
          >
            <XIcon className="h-6 w-6" />
          </button>
          <div className="flex flex-grow justify-end">
            <input
              className="ml-2 w-20"
              type="number"
              disabled
              value={cartItem.quantity}
            />
            <button
              onClick={() => {
                setQuantity((prevState) => {
                  if (prevState < cartItem.product.availableStock) {
                    updateCartItem({
                      id: cartItem.productId,
                      quantity: prevState + 1,
                    });
                    return prevState + 1;
                  } else {
                    return prevState;
                  }
                });
              }}
              className="flex border-accent-2 border p-1"
            >
              <PlusIcon className="h-6 w-6" />
            </button>
            <button
              className="flex border-accent-2 border p-1"
              onClick={() => {
                setQuantity((prevState) => {
                  if (prevState > 1) {
                    updateCartItem({
                      id: cartItem.productId,
                      quantity: prevState - 1,
                    });
                    return prevState - 1;
                  } else {
                    return prevState;
                  }
                });
              }}
            >
              <MinusIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
