import { XIcon } from "@heroicons/react/outline";
import { Form, Formik } from "formik";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useSigninMutation, useSignupMutation } from "../../hooks/useAuth";
import FormikControl from "../Form/FormikController";

const LoginPopup = ({ closePopupHandler }) => {
  const { mutateAsync: signupMutate, isSuccess } = useSignupMutation();
  const { mutateAsync: signinMutate } = useSigninMutation();
  const [isLogin, setLogin] = useState(true);
  const [data, setData] = useState({ email: "", password: "" });
  const google = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:5000/api/v1/auth/facebook", "_self");
  };

  const goToLoginHandler = () => {
    setLogin(true);
    setData({ email: "", password: "" });
  };
  const goToSignUpHandler = () => {
    setLogin(false);
    setData({ username: "", email: "", password: "" });
  };
  const signupSubmitHandler = async (values) => {
    try {
      console.log("signup formik ", values);
      await signupMutate(values);
      setLogin(true);
      setData({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const signinSubmitHandler = async (values) => {
    try {
      console.log("sigin formik ", values);
      await signinMutate(values);
      closePopupHandler();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <div className="absolute  top-0 right-0 bottom-0 w-full h-screen bg-red-100"></div> */}
      <div className="fixed inset-0  bg-slate-300 max-h-screen h-full  opacity-40  z-50 "></div>
      <div className="flex justify-center items-center h-screen fixed inset-0  z-50 overflow-hidden">
        {isLogin ? (
          <div className="inline-block  w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
            <div className="w-full flex justify-end">
              <XIcon
                className="h-6 w-6 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-700 hover:text-gray-900"
                onClick={() => closePopupHandler()}
              />
            </div>
            <h3 className="text-3xl font-bold text-center">Logo</h3>
            <h3 className="text-2xl mt-2 font-bold text-center">
              Login to your account
            </h3>
            <Formik
              initialValues={data}
              enableReinitialize
              onSubmit={signinSubmitHandler}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="mt-4">
                      <div>
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
                      <div>
                        <FormikControl
                          control={"input"}
                          label={"Password"}
                          name="password"
                          type="password"
                          placeholder={"Password"}
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
                      <div className="flex flex-col space-y-2 items-center justify-between">
                        <button
                          type="submit"
                          className=" w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                        >
                          Login
                        </button>
                        {/* <GoogleButton
                          onClick={() => {
                            console.log("Google button clicked");
                          }}
                        /> */}
                        <div
                          className="cursor-pointer bg-red-600 flex px-1 py-2 text-white font-bold items-center w-full rounded-lg justify-center"
                          onClick={google}
                        >
                          <img
                            src="/google.png"
                            className="w-[20px] h-[20px] mr-[10px] "
                          />
                          Login with Google
                        </div>
                        <div
                          className="cursor-pointer bg-blue-600 flex px-1 py-2 text-white font-bold items-center w-full rounded-lg justify-center"
                          onClick={facebook}
                        >
                          <img
                            src="/facebook.png"
                            className="w-[20px] h-[20px] mr-[10px] "
                          />
                          Login with Facebook
                        </div>
                        {/* <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a> */}
                        <p
                          className="cursor-pointer text-sm text-blue-600 hover:underline"
                          onClick={goToSignUpHandler}
                        >
                          Don't have an account? Sign Up
                        </p>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        ) : (
          <div className="inline-block  w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
            <div className="w-full flex justify-end">
              <XIcon
                className="h-6 w-6 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-700 hover:text-gray-900"
                onClick={() => closePopupHandler()}
              />
            </div>
            <h3 className="text-3xl font-bold text-center">Logo</h3>
            <h3 className="text-2xl mt-2 font-bold text-center">
              Sign Up to create your account
            </h3>
            <Formik
              initialValues={data}
              enableReinitialize
              onSubmit={signupSubmitHandler}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="mt-4">
                      <div>
                        <FormikControl
                          control={"input"}
                          label={"Username"}
                          name="username"
                          placeholder={"Username"}
                        />
                      </div>
                      <div>
                        <FormikControl
                          control={"input"}
                          label={"Email"}
                          name="email"
                          placeholder={"Email"}
                        />
                      </div>
                      <div>
                        <FormikControl
                          control={"input"}
                          label={"Password"}
                          name="password"
                          type={"password"}
                          placeholder={"Password"}
                        />
                      </div>
                      <div className="flex flex-col space-y-2 items-center justify-between">
                        <button
                          type="submit"
                          className=" w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                        >
                          Sign Up
                        </button>

                        <p
                          className="cursor-pointer text-sm text-blue-600 hover:underline"
                          onClick={goToLoginHandler}
                        >
                          Do you have an account? Log In
                        </p>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginPopup;
