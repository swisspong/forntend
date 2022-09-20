import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

const CheckoutPage = () => {
  return (
    <section className="">
      <h1 className="sr-only">Checkout</h1>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-[calc(100vh-4rem)]">
          <div className="py-12 bg-gray-50 md:py-24 ">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-blue-900 rounded-full"></span>

                <h2 className="ml-4 font-medium">BambooYou</h2>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-medium tracking-tight">$99.99</p>
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of
                </p>
              </div>

              <div className="mt-12">
                <div className="h-full">
                  <ul className="-my-4 divide-y divide-gray-200">
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
                          <div className="flex  flex-wrap max-w-[30ch] items-center pb-1">
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
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 bg-white md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <form className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="text"
                    id="first_name"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="text"
                    id="last_name"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="tel"
                    id="phone"
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="block mb-1 text-sm text-gray-600">
                    Billing Address
                  </legend>

                  <div className="-space-y-px bg-white rounded-lg shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>

                      <select
                        className="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                        id="country"
                        name="country"
                      >
                        <option>England</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        className="border-gray-200 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        placeholder="ZIP/Post Code"
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                    type="submit"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
