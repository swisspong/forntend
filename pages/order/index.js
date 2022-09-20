import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

const OrderPage = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto min-h-[calc(100vh-4rem)]">
      <div>
        <h1 className="text-2xl font-bold lg:text-3xl">Order #342423</h1>
      </div>
      <div className="grid gap-8 lg:items-start lg:grid-cols-12 grid-rows-2">
        <div className="lg:col-span-7 mt-4">
          <div className="flex flex-col">
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
                <a href="#" className="hidden md:block">
                  Short sleeve t-shirt
                </a>
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
                <input className="ml-2 w-20" type="number" value={1} />
                <button className="flex border-accent-2 border p-1">
                  <PlusIcon className="h-6 w-6" />
                </button>
                <button className="flex border-accent-2 border p-1">
                  <MinusIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 ">
          <div className="flex-shrink-0 px-4 py-10 sm:px-6">
            <div className="border-t border-accent-2">
              <ul className="py-3">
                <li className="flex justify-between py-1">
                  <span>Subtotal</span>
                  <span>$100.00</span>
                </li>
              </ul>
              <div className="flex justify-between border-t border-accent-2 py-3 font-bold mb-10">
                <span>Total</span>
                <span>$100.00</span>
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
    // <section className="">
    //   <h1 className="sr-only">Checkout</h1>
    //   <div className="relative mx-auto max-w-screen-2xl">
    //     <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-[calc(100vh-4rem)] divide-y md:divide-y-0 divide-gray-200">
    //       <div className="py-12  md:py-24 ">
    //         <div className="max-w-lg px-4 mx-auto lg:px-8">
    //           <div className="flex flex-col space-y-4">
    //             <h2 className="text-3xl font-bold">Order #342423</h2>

    //             <div className="flex items-center">
    //               <span className="w-10 h-10 bg-blue-900 rounded-full"></span>

    //               <h2 className="ml-4 font-medium">BambooYou</h2>
    //             </div>
    //             <div className="flex flex-col">
    //               <h2 className="text-2xl font-medium">Shipping</h2>
    //               <p className="mt-1 text-sm text-gray-500">
    //                 <span className="text-gray-800 font-medium">Address :</span>{" "}
    //                 17/4 Village No.5 Bamroongrat Road, Pibulsongkram
    //                 Sub-district, Muang District, Bangkok, 10400
    //               </p>
    //             </div>
    //             <div className="">
    //               <p className="text-2xl font-medium tracking-tight">$99.99</p>
    //               <p className="mt-1 text-sm text-gray-500">
    //                 For the purchase of
    //               </p>
    //             </div>
         
    //           </div>

    //           <div className="mt-12">
    //             <div className="h-full">
    //               <ul className="">
    //                 <div className="flex flex-col">
    //                   <div className="flex flex-grow flex-col md:flex-row md:space-x-4 py-4">
    //                     <div className="flex space-x-2 ">
    //                       <div className="w-16 h-16">
    //                         <div className="aspect-w-1 aspect-h-1">
    //                           <img
    //                             src="https://images.pexels.com/photos/10681880/pexels-photo-10681880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    //                             className="object-cover object-center"
    //                             alt="Person typing on a laptop keyboard"
    //                           />
    //                         </div>
    //                       </div>
    //                       <a href="#" className="flex-grow  md:hidden">
    //                         Short sleeve t-shirt
    //                       </a>
    //                       <div className="flex md:hidden flex-col  justify-between space-y-2 text-sm">
    //                         100
    //                       </div>
    //                     </div>
    //                     <div className="mt-2 md:mt-0 flex flex-col flex-grow text-base">
    //                       <a href="#" className="hidden md:block">
    //                         Short sleeve t-shirt
    //                       </a>
    //                       <div className="flex  flex-wrap max-w-[30ch] items-center pb-1">
    //                         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
    //                           Color
    //                           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
    //                             red
    //                           </span>
    //                         </div>
    //                         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
    //                           Color
    //                           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
    //                             red
    //                           </span>
    //                         </div>
    //                         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
    //                           Color
    //                           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
    //                             red
    //                           </span>
    //                         </div>
    //                         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
    //                           Color
    //                           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
    //                             red
    //                           </span>
    //                         </div>
    //                         <div className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center">
    //                           Color
    //                           <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
    //                             red
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="hidden md:flex flex-col justify-between space-y-2 text-sm">
    //                       100
    //                     </div>
    //                   </div>
    //                 </div>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

         
    //       <div className="py-12 bg-white md:py-24">
    //       <div className="flex-shrink-0 px-4 py-10 sm:px-6">
    //         <div className="border-t border-accent-2">
    //           <ul className="py-3">
    //             <li className="flex justify-between py-1">
    //               <span>Subtotal</span>
    //               <span>$100.00</span>
    //             </li>
    //           </ul>
    //           <div className="flex justify-between border-t border-accent-2 py-3 font-bold mb-10">
    //             <span>Total</span>
    //             <span>$100.00</span>
    //           </div>
    //         </div>
    //         <div className="flex flex-row justify-end">
    //           <a className="w-full lg:w-72 justify-center inline-flex py-2 px-4 bg-gray-200">
    //             Proceed to Checkout
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default OrderPage;
