import { Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FormikControl from "../../components/Form/FormikController";

import { useCart } from "../../hooks/useCart";
import Script from "react-load-script";
import { useAddOrderMutation } from "../../hooks/usePayment";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectCredential } from "../../features/auth/authSlice";
import { TruckIcon } from "@heroicons/react/outline";
import { useAddressQuery } from "../../hooks/useUser";
import AddressCard from "../../components/account/AddressCard";
import AddressListPopup from "../../components/checkout/AddressListPopup";
import { openAuthPopup } from "../../features/auth/authPopupSlice";
import AddressPopup from "../../components/account/AddresPopup";
const CheckoutPage = () => {
  const { data: address, isLoadingAddresss, isFetching } = useAddressQuery();
  const credential = useSelector(selectCredential);
  const { mutate } = useAddOrderMutation();
  const { isLoading, data } = useCart();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupCreate, setOpenPopupCreate] = useState(false);
  const [selectAddresId, setSelectAdressId] = useState(null);
  useEffect(() => {
    if (address?.length > 0) {
      setSelectAdressId(address[0].id);
    }
  }, [address]);
  const openPopupHanelder = () => {
    setOpenPopup(true);
  };
  const closePopupHandler = () => {
    setOpenPopup(false);
  };
  const openPopupCreateHanelder = () => {
    setOpenPopupCreate(true);
  };
  const closePopupCreateHandler = () => {
    setOpenPopupCreate(false);
  };
  const selectAdressIdHandler = (id) => {
    setSelectAdressId(id);
  };
  if (isLoading || isLoadingAddresss || isFetching) {
    return <div>Loading....</div>;
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required().min(2),
  });

  const onSubmitNotAuth = (values) => {
    console.log("formik values", values);
    console.log("amount",data.totalPrice)
    mutate({ ...values, amount: data.totalPrice });
  };
  return (
    <section className="">
      <h1 className="sr-only">Checkout</h1>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-[calc(100vh-4rem)]">
          <div className="py-12 bg-gray-50 md:py-24 ">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <div className="">
                <p className="text-2xl font-medium tracking-tight">
                  ${Number(data.totalPrice).toFixed(2)}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of
                </p>
              </div>

              <div className="mt-12">
                <div className="h-full">
                  <ul className="-my-4 divide-y divide-gray-200">
                    <div className="flex flex-col">
                      {data.cartItemList.map((cartItem) => (
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
                            <Disclosure defaultOpen>
                              {({ open }) => (
                                <>
                                  <div>
                                    <Disclosure.Button className="flex justify-start items-center">
                                      <legend className="text-xs ">
                                        Detail
                                      </legend>
                                      <ChevronUpIcon
                                        className={`${
                                          open ? "transform rotate-180" : ""
                                        } w-5 h-5 text-gray-500 `}
                                      />
                                    </Disclosure.Button>
                                  </div>
                                  <Disclosure.Panel>
                                    <dl className="ml-1 mt-1 space-y-1 text-xs text-gray-500">
                                      {cartItem.cartItemDetail.map(
                                        (cartItemDetail) => (
                                          <div>
                                            <dt className="inline">
                                              {cartItemDetail.optionGroup.name}:
                                            </dt>
                                            <dd className="inline">
                                              {cartItemDetail.option.name}
                                            </dd>
                                          </div>
                                        )
                                      )}
                                    </dl>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </div>
                          <div className="hidden md:block text-sm">
                            ${Number(cartItem.price).toFixed(2)}
                            <small class="text-gray-500">
                              {" "}
                              x{cartItem.quantity}
                            </small>
                            <br />= ${Number(cartItem.subTotal).toFixed(2)}
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
              {credential ? (
                <>
                  <h1 className="text-2xl font-bold lg:text-2xl">Address</h1>
                  {address?.length <= 0 ? (
                    <>
                      <div className="mt-6 flex justify-center">
                        <span className="w-16 h-16 border-dashed border-2 border-gray-900 rounded-full flex justify-center items-center">
                          <TruckIcon className="w-9 h-9" />
                        </span>
                      </div>
                      <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                        Your address is empty
                      </h2>
                      <div className="mt-2 flex justify-center">
                        <button
                          type="button"
                          className=" mt-3 px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                          onClick={openPopupCreateHanelder}
                        >
                          Create new address
                        </button>
                      </div>
                      {openPopupCreate && (
                        <AddressPopup
                          closePopupHandler={closePopupCreateHandler}
                        />
                      )}
                    </>
                  ) : (
                    <article class=" ">
                      <ul class="mt-4 space-y-2">
                        {address
                          .filter((item) => item.id === selectAddresId)
                          .map((item) => (
                            <li>
                              <AddressCard item={item} />
                            </li>
                          ))}
                      </ul>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className=" mt-3 px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                          onClick={openPopupHanelder}
                        >
                          Select other address
                        </button>
                      </div>
                      {openPopup && (
                        <AddressListPopup
                          selectAdressIdHandler={selectAdressIdHandler}
                          closePopupHandler={closePopupHandler}
                        />
                      )}
                    </article>
                  )}

                  <button
                    className="mt-6 rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                    type="submit"
                  >
                    Cash On Delivery
                  </button>
                  <button
                    className="mt-3 rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                    type="submit"
                  >
                    Attach Slip
                  </button>
                </>
              ) : (
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmitNotAuth}
                >
                  {(formik) => {
                    console.log(formik.errors);

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

                        <div className="col-span-6">
                          <button
                            onClick={() => {}}
                            className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                            type="submit"
                          >
                            Cash On Delivery
                          </button>
                          <button
                            className="mt-3 rounded-lg bg-gray-600 cursor-not-allowed text-sm p-2.5 text-white w-full block"
                            disabled
                            type="button"
                          >
                            Attach Slip
                          </button>
                          <p
                            className="cursor-pointer text-sm  hover:underline"
                            onClick={() => {
                              dispatch(openAuthPopup());
                            }}
                          >
                            You must be login to use this method
                          </p>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
