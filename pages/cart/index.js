import {
  ArrowCircleLeftIcon,
  ArrowLeftIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CartItem from "../../components/cart/CartItem";
import DialogCartError from "../../components/cart/DialogCartError";
import {
  useCart,
  useRemoveItemCartMutation,
  useUpdateItemCartMutation,
} from "../../hooks/useCart";

const CartPage = () => {
  const { isLoading, data, isFetching, refetch } = useCart();
  const { mutate: removeCartItem } = useRemoveItemCartMutation();
  const { mutate: updateCartItem } = useUpdateItemCartMutation();
  const router = useRouter();
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto min-h-screen">
      {data.cartItemList.some((item) => item?.error && item.error) && (
        <DialogCartError
          cartItemList={data.cartItemList.filter(
            (item) => item?.error && item.error
          )}
        />
      )}
      <div>
        <h1 className="text-2xl font-bold lg:text-3xl">My Cart</h1>
      </div>
      <div className="grid gap-8 lg:items-start lg:grid-cols-12 grid-rows-2">
        <div className="lg:col-span-7 mt-4">
          {data.cartItemList.length <= 0 && (
            <>
              <div className="mt-16 flex justify-center">
                <span className="w-16 h-16 border-dashed border-2 border-gray-900 rounded-full flex justify-center items-center">
                  <ShoppingBagIcon className="w-9 h-9" />
                </span>
              </div>
              <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                Your cart is empty
              </h2>

              <div className="mt-2 flex justify-center">
                <Link href={"/"}>
                  <a className="flex items-center">
                    <ArrowLeftIcon className="h-4 w-4" />
                    <p className="ml-2 tracking-wide text-center">
                      Go to shopping
                    </p>
                  </a>
                </Link>
              </div>
            </>
          )}
          {data.cartItemList.map((cartItem) => (
            <CartItem
              cartItem={cartItem}
              removeCartItem={removeCartItem}
              updateCartItem={updateCartItem}
            />
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
              {/* <Link href={"/checkout"}> */}
              <button
                onClick={() => {
                  refetch();
                  if (
                    !isFetching &&
                    !isLoading &&
                    !data.cartItemList.some((item) => item?.error && item.error)
                  ) {
                    router.push("/checkout");
                  }
                }}
                className="w-full lg:w-72 justify-center inline-flex py-2 px-4 bg-gray-200 "
              >
                Proceed to Checkout
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
