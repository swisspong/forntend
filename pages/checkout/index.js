import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import React from "react";
import FormikControl from "../../components/Form/FormikController";
import CreditCard from "../../components/omise-payment/CreditCard";
import { useCart } from "../../hooks/useCart";
import Script from "react-load-script";
import { useAddOrderMutation } from "../../hooks/usePayment";
const CheckoutPage = () => {
  const { isLoading, data } = useCart();
  const { mutate } = useAddOrderMutation();
  if (isLoading) {
    return <div>Loading....</div>;
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required().min(2),
  });
  const loadScriptHandler = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: "pkey_test_5ta9e8ofyrgmm9x20wo",
      currency: "thb",
      frameLabel: "ชื่อผู้ประกอบการค้า",
      frameDescription: "รายละเอียดของผู้ประกอบการค้า",
      // buttonLabel: "จ่าย 1,250",
      amount: Number(data.totalPrice) * 100,
      submitLabel: "จ่ายเลยตอนนี้",
      locale: "th",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#checkout-button-credit-card");
    OmiseCard.attach();
  };
  const omiseCreditCardHandler = (values) => {
    OmiseCard.open({
      amount: Number(data.totalPrice) * 100,
      onCreateTokenSuccess: (nonce) => {
        console.log(nonce);
        console.log(values);
        mutate({ ...values, token: nonce, amount: data.totalPrice });
        //mutate()
        // console.log(cart);
        /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
      },
      onFormClosed: () => {
        creditCardConfigure();
        /* Handler on form closure. */
      },
    });
  };

  const onSubmit = (values) => {
    console.log("formik values", values);
    // mutate(values.firstname, values.lastName, values.email, values.address);
    creditCardConfigure();
    omiseCreditCardHandler(values);
  };
  return (
    <section className="">
      <h1 className="sr-only">Checkout</h1>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-[calc(100vh-4rem)]">
          <div className="py-12 bg-gray-50 md:py-24 ">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              {/* <div className="flex items-center">
                <span className="w-10 h-10 bg-blue-900 rounded-full"></span>

                <h2 className="ml-4 font-medium">BambooYou</h2>
              </div> */}
              <div className="">
                <p className="text-2xl font-medium tracking-tight">
                  ${Number(data.totalPrice).toFixed(2)}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of
                </p>
              </div>
              {/* <div className="mt-8">
                <p className="text-2xl font-medium tracking-tight">
                  ${Number(data.totalPrice).toFixed(2)}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of
                </p>
              </div> */}

              <div className="mt-12">
                <div className="h-full">
                  <ul className="-my-4 divide-y divide-gray-200">
                    <div className="flex flex-col">
                      {data.cartItemList.map((cartItem) => (
                        // <CartItem
                        //   cartItem={cartItem}
                        //   removeCartItem={removeCartItem}
                        //   updateCartItem={updateCartItem}
                        // />
                        <div className="flex flex-grow flex-col md:flex-row md:space-x-4 py-4">
                          <div className="flex space-x-2 ">
                            <div className="w-16 h-16">
                              <div className="aspect-w-1 aspect-h-1">
                                <img
                                  // src="https://images.pexels.com/photos/10681880/pexels-photo-10681880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                  src={
                                    cartItem.product.productImage[0].image.path
                                  }
                                  className="object-cover object-center"
                                  alt="Person typing on a laptop keyboard"
                                />
                              </div>
                            </div>
                            <Link href={`/product/${cartItem.productId}`}>
                              <a className="flex-grow  md:hidden">
                                {cartItem.product.name}
                              </a>
                            </Link>
                            <div className="flex md:hidden flex-col  justify-between space-y-2 text-sm">
                              ${Number(cartItem.price).toFixed(2)}
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 flex flex-col flex-grow text-base">
                            <Link href={`/product/${cartItem.productId}`}>
                              <a className="hidden md:block">
                                {cartItem.product.name}
                              </a>
                            </Link>
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
                            ${Number(cartItem.price).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 bg-white md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  address: "",
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  console.log(formik.errors);
                  // console.log(formik.handleSubmit);
                  return (
                    <Form className="grid grid-cols-6 gap-4">
                      <div className="col-span-3">
                        <FormikControl
                          control={"input"}
                          label={"First Name"}
                          name={"firstName"}
                        />
                      </div>
                      <div className="col-span-3">
                        <FormikControl
                          control={"input"}
                          label={"Last Name"}
                          name={"lastName"}
                        />
                      </div>
                      <div className="col-span-6">
                        <FormikControl
                          control={"input"}
                          label={"Email"}
                          type={"email"}
                          name={"email"}
                        />
                        {/* <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="email"
                    >
                      Email
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="email"
                      id="email"
                    /> */}
                      </div>
                      <div className="col-span-6">
                        <FormikControl
                          control={"input"}
                          label={"Phone"}
                          type={"tel"}
                          name={"phone"}
                        />
                      </div>
                      <div className="col-span-6">
                        <FormikControl
                          control={"input"}
                          label={"Address"}
                          type={"text"}
                          name={"address"}
                        />
                      </div>

                      {/* <fieldset className="col-span-6">
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
                  </fieldset> */}

                      <div className="col-span-6">
                        <Script
                          url={"https://cdn.omise.co/omise.js"}
                          onLoad={loadScriptHandler}
                        />
                        <button
                          id="checkout-button-credit-card"
                          // onClick={clickHandler}
                          className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                          type="submit"
                        >
                          Pay Now With Credit Card
                        </button>
                        {/* <CreditCard formik={formik} /> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
