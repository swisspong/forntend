import { XIcon } from "@heroicons/react/outline";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCredential } from "../../features/auth/authSlice";
import {
  useAddAddressMutation,
  useEditAddressMutation,
} from "../../hooks/useUser";

import FormikControl from "../Form/FormikController";

const AddressPopup = ({
  closePopupHandler,
  info = null,
  setEditIdHandler = null,
}) => {
  const { mutate: addAddress, isSuccess } = useAddAddressMutation();
  const { mutate: editaddress, isSuccess: isSuccessEdit } =
    useEditAddressMutation();

  const credential = useSelector(selectCredential);
  const [data, setData] = useState({
    ...(info && { id: info.id }),
    recipientName: info ? info.recipientName : credential.user.username,
    address: info?.address || "",
    phone: info?.phone || "",
  });
  if (isSuccess || isSuccessEdit) {
    closePopupHandler();
  }
  const addAddressHandler = async (values) => {
    console.log("formik: ", values);
    console.log("credential", credential);
    addAddress({ id: credential.user.id, ...values });
  };
  const updateAddressHandler = async (values) => {
    console.log("formik", values);
    editaddress({ id: credential.user.id, ...values });
  };
  return (
    <>
      <div className="fixed inset-0  bg-slate-300 max-h-screen h-full  opacity-40  z-50 "></div>
      <div className="flex justify-center items-center h-screen fixed inset-0  z-50 overflow-hidden">
        <div className="inline-block  w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
          <div className="w-full flex justify-between">
            <p class="text-lg font-medium">
              {info ? "Update address" : "Create new address"}
            </p>
            <XIcon
              className="h-6 w-6 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-700 hover:text-gray-900"
              onClick={() => {
                if (setEditIdHandler) {
                  setEditIdHandler(null);
                }
                closePopupHandler();
              }}
            />
          </div>

          <Formik
            initialValues={data}
            enableReinitialize
            onSubmit={info ? updateAddressHandler : addAddressHandler}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="mt-4">
                    <div className="mt-1">
                      <FormikControl
                        control={"input"}
                        label={"Recipient name"}
                        name="recipientName"
                        placeholder={"Recipient name"}
                      />
                    </div>
                    <div className="mt-1">
                      <FormikControl
                        control={"textarea"}
                        label={"Address"}
                        row={4}
                        name="address"
                        placeholder={"Address"}
                      />
                    </div>
                    <div className="mt-1">
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
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddressPopup;
