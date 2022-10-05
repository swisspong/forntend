import { ShoppingBagIcon, TruckIcon } from "@heroicons/react/outline";
import { isError, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AddressPopup from "../../components/account/AddresPopup";
import FormikControl from "../../components/Form/FormikController";
import { useRefresh } from "../../hooks/useAuth";

const AccountPage = () => {
  //const queryClient = useQueryClient();
  const {
    data: auth,
    isSuccess,
    isError,
    isLoading,
    isFetching,
  } = useRefresh();
  const router = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const openPopupHanelder = () => {
    setOpenPopup(true);
  };
  const closePopupHandler = () => {
    setOpenPopup(false);
  };
  useEffect(() => {
    console.log(auth);
    //console.log(queryClient.getQueryData(["auth"]));
  }, [auth]);
  useEffect(() => {
    if ((isSuccess && !auth?.user) || isError) {
      router.back();
    }
  }, [auth, isSuccess, isError]);

  if (isLoading || isFetching || !auth) {
    return <div>Loading....</div>;
  }
  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto min-h-[calc(100vh-4rem)]">
      <h2 class="text-lg font-medium mb-1"> General </h2>
      <article class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <div class="flex items-center">
          <img
            alt="Developer"
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            class="h-16 w-16 rounded-full object-cover"
          />

          <div class="ml-3">
            <h5 class="text-lg font-medium ">Claire Mac</h5>

            <div class="flow-root">
              <ul class="-m-1 flex flex-wrap">
                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-500">
                    {" "}
                    Twitter{" "}
                  </a>
                </li>

                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-500">
                    {" "}
                    GitHub{" "}
                  </a>
                </li>

                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-500">
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="mt-4"></ul>

        <Formik
          initialValues={{
            username: auth?.user.username,
            email: auth?.user.email,
          }}
          enableReinitialize
          //onSubmit={signinSubmitHandler}
        >
          {(formik) => {
            return (
              <Form>
                <div className="mt-4">
                  <div className="mb-1">
                    <FormikControl
                      control={"input"}
                      label={"Username"}
                      name="username"
                      placeholder={"Username"}
                    />
                    {/* <label className="block" htmlFor="Password">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        /> */}
                  </div>
                  <div className="mb-1">
                    <FormikControl
                      control={"input"}
                      label={"Email"}
                      name="email"
                      placeholder={"Email"}
                    />

                    {/* <label className="block" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        /> */}
                  </div>

                  <div className="flex flex-col space-y-2 items-center justify-between">
                    <button
                      type="submit"
                      className=" w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                    >
                      Login
                    </button>
                    {/* <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a> */}
                    <p
                      className="cursor-pointer text-sm text-blue-600 hover:underline"
                      //  onClick={goToSignUpHandler}
                    >
                      Don't have an account? Sign Up
                    </p>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </article>
      <h2 class="text-lg font-medium mt-3 mb-1"> Address</h2>
      {/* <article class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <div class="flex items-center">
          <img
            alt="Developer"
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            class="h-16 w-16 rounded-full object-cover"
          />

          <div class="ml-3">
            <h5 class="text-lg font-medium ">Claire Mac</h5>

            <div class="flow-root">
              <ul class="-m-1 flex flex-wrap">
                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-500">
                    {" "}
                    Twitter{" "}
                  </a>
                </li>

                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-500">
                    {" "}
                    GitHub{" "}
                  </a>
                </li>

                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-500">
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="mt-4"></ul>

        <Formik
          initialValues={{
            username: auth?.user.username,
            phone: "",
            address: "",
          }}
          enableReinitialize
          //onSubmit={signinSubmitHandler}
        >
          {(formik) => {
            return (
              <Form>
                <div className="mt-4">
                  <div className="mb-1">
                    <FormikControl
                      control={"input"}
                      label={"Username"}
                      name="username"
                      placeholder={"Username"}
                    />
                  </div>
                  <div className="mb-1">
                    <FormikControl
                      control={"input"}
                      label={"Address"}
                      name="address"
                      placeholder={"Address"}
                    />
                  </div>
                  <div className="mb-1">
                    <FormikControl
                      control={"input"}
                      label={"Phone"}
                      name="phone"
                      placeholder={"Phone"}
                    />
                  </div>

                  <div className="flex flex-col space-y-2 items-center justify-between">
                    <button
                      type="submit"
                      className=" w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                    >
                      Login
                    </button>

                    <p
                      className="cursor-pointer text-sm text-blue-600 hover:underline"
                      //  onClick={goToSignUpHandler}
                    >
                      Don't have an account? Sign Up
                    </p>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </article> */}
      <article class=" rounded-xl border shadow-sm shadow-indigo-100 p-4">
        <ul class="mt-4 space-y-2">
          <li>
            <div className="mt-16 flex justify-center">
              <span className="w-16 h-16 border-dashed border-2 border-gray-900 rounded-full flex justify-center items-center">
                <TruckIcon className="w-9 h-9" />
              </span>
            </div>
            <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
              Your address is empty
            </h2>
          </li>
          <li>
            <div class="flex items-center  space-x-5  h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <div className="grow">
                <h5 class="font-medium ">Swiss Sutthijakra</h5>

                <p class="mt-1 text-xs  text-gray-500">
                  428/1-2 ม.1 ตำบลหนองแสง อำเภอวาปีปทุม จังหวัดหมาสารคาม
                </p>

                <h5 class="mt-1 text-gray-500">087-424-6651</h5>
              </div>
              <button
                type="button"
                className=" px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Delete
              </button>
              <button
                type="button"
                className=" px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Edit
              </button>
            </div>
          </li>
        </ul>
        <div className="flex justify-end">
          <button
            type="button"
            className=" mt-3 px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            onClick={openPopupHanelder}
          >
            Add new address
          </button>
          {openPopup && <AddressPopup closePopupHandler={closePopupHandler} />}
        </div>
      </article>
    </div>
  );
};

export default AccountPage;
