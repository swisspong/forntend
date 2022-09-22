import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import CartItem from "../../components/cart/CartItem";
import {
  useCart,
  useRemoveItemCartMutation,
  useUpdateItemCartMutation,
} from "../../hooks/useCart";

const CartPage = () => {
  const { isLoading, data } = useCart();
  const { mutate: removeCartItem } = useRemoveItemCartMutation();
  const { mutate: updateCartItem } = useUpdateItemCartMutation();
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto min-h-screen">
      <div>
        <h1 className="text-2xl font-bold lg:text-3xl">My Cart</h1>
      </div>
      <div className="grid gap-8 lg:items-start lg:grid-cols-12 grid-rows-2">
        <div className="lg:col-span-7 mt-4">
          {/* <div className="flex flex-col">
            <div className="flex flex-grow flex-col md:flex-row md:space-x-4 py-4">
              <div className="flex space-x-2 ">
                <div className="w-16 h-16">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src="https://images.pexels.com/photos/10681880/pexels-photo-10681880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      className="object-cover object-center"
                      alt="Person typing on a laptop keyboard"
                    />
                  </div>
                </div>
                <a href="#" className="flex-grow  md:hidden">
                  Short sleeve t-shirt
                </a>
                <div className="flex md:hidden flex-col  justify-between space-y-2 text-sm">
                  100
                </div>
              </div>
              <div className="mt-2 md:mt-0 flex flex-col flex-grow text-base">
                <Link href={`/`}>
                  <a className="hidden md:block">Short sleeve t-shirt</a>
                </Link>
                <div className="flex  flex-wrap items-center pb-1">
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
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-between space-y-2 text-sm">
                100
              </div>
            </div>
            <div className="flex flex-row h-9">
              <button className="flex border-accent-2 border p-1">
                <XIcon className="h-6 w-6" />
              </button>
              <div className="flex flex-grow justify-end">
                <input
                  className="ml-2 w-20"
                  type="number"
                  value={data.totalQuantity}
                />
                <button className="flex border-accent-2 border p-1">
                  <PlusIcon className="h-6 w-6" />
                </button>
                <button className="flex border-accent-2 border p-1">
                  <MinusIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div> */}
          {data.cartItemList.map((cartItem) => (
            <CartItem cartItem={cartItem} removeCartItem={removeCartItem} updateCartItem={updateCartItem} />
            // <div className="flex flex-col">
            //   <div className="flex flex-grow flex-col md:flex-row md:space-x-4 py-4">
            //     <div className="flex space-x-2 ">
            //       <div className="w-16 h-16">
            //         <div className="aspect-w-1 aspect-h-1">
            //           <img
            //             // src="https://images.pexels.com/photos/10681880/pexels-photo-10681880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            //             src={cartItem.product.productImage[0].image.path}
            //             className="object-cover object-center"
            //             alt="Person typing on a laptop keyboard"
            //           />
            //         </div>
            //       </div>
            //       <Link href={`/product/${cartItem.productId}`}>
            //         <a className="flex-grow  md:hidden">
            //           {cartItem.product.name}
            //         </a>
            //       </Link>
            //       <div className="flex md:hidden flex-col  justify-between space-y-2 text-sm">
            //         ${Number(cartItem.price).toFixed(2)}
            //       </div>
            //     </div>
            //     <div className="mt-2 md:mt-0 flex flex-col flex-grow text-base">
            //       <Link href={`/product/${cartItem.productId}`}>
            //         <a className="hidden md:block">{cartItem.product.name}</a>
            //       </Link>
            //       <div className="flex  flex-wrap items-center pb-1">
            //         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
            //           Color
            //           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
            //             red
            //           </span>
            //         </div>
            //         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
            //           Color
            //           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
            //             red
            //           </span>
            //         </div>
            //         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
            //           Color
            //           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
            //             red
            //           </span>
            //         </div>
            //         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
            //           Color
            //           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
            //             red
            //           </span>
            //         </div>
            //         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
            //           Color
            //           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
            //             red
            //           </span>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="hidden md:flex flex-col justify-between space-y-2 text-sm">
            //       ${Number(cartItem.price).toFixed(2)}
            //     </div>
            //   </div>
            //   <div className="flex flex-row h-9">
            //     <button
            //       className="flex border-accent-2 border p-1"
            //       onClick={() => {
            //         removeCartItem(cartItem.productId);
            //       }}
            //     >
            //       <XIcon className="h-6 w-6" />
            //     </button>
            //     <div className="flex flex-grow justify-end">
            //       <input
            //         className="ml-2 w-20"
            //         type="number"
            //         value={cartItem.quantity}
            //       />
            //       <button className="flex border-accent-2 border p-1">
            //         <PlusIcon className="h-6 w-6" />
            //       </button>
            //       <button className="flex border-accent-2 border p-1">
            //         <MinusIcon className="h-6 w-6" />
            //       </button>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>

        <div className="lg:col-span-5 ">
          <div className="flex-shrink-0 px-4 py-10 sm:px-6">
            <div className="border-t border-accent-2">
              <ul className="py-3">
                <li className="flex justify-between py-1">
                  <span>Subtotal</span>
                  <span>${Number(data.totalPrice).toFixed(2)}</span>
                </li>
              </ul>
              <div className="flex justify-between border-t border-accent-2 py-3 font-bold mb-10">
                <span>Total</span>
                <span>${Number(data.totalPrice).toFixed(2)}</span>
              </div>
            </div>
            <div className="flex flex-row justify-end">
              <a className="w-full lg:w-72 justify-center inline-flex py-2 px-4 bg-gray-200">
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
