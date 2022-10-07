import { ShoppingBagIcon, TruckIcon } from "@heroicons/react/outline";
import { isError, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AddressPopup from "../../components/account/AddresPopup";
import FormikControl from "../../components/Form/FormikController";
import { useRefresh } from "../../hooks/useAuth";
import { useAddressQuery, useEditBioMutation } from "../../hooks/useUser";

const AccountPage = () => {
  const {
    data: auth,
    isSuccess,
    isError,
    isLoading,
    isFetching,
  } = useRefresh();
  const { mutate: updateBio } = useEditBioMutation();
  const router = useRouter();

  useEffect(() => {
    if ((isSuccess && !auth?.user) || isError) {
      router.back();
    }
  }, [auth, isSuccess, isError]);

  if (isLoading || isFetching || !auth) {
    return <div>Loading....</div>;
  }
  const submitHandler = (values) => {
    console.log("formik", values);
    updateBio({ id: auth.user.id, values });
  };
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
          onSubmit={submitHandler}
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
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </article>
    </div>
  );
};

export default AccountPage;
