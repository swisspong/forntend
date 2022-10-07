import { XIcon } from "@heroicons/react/outline";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useAddressQuery } from "../../hooks/useUser";
import AddressPopup from "../account/AddresPopup";
import AddressCard from "../account/AddressCard";
import FormikControl from "../Form/FormikController";

const AddressListPopup = ({ closePopupHandler }) => {
  const [openPopup, setOpenPopup] = useState(false);
  
  const [editId, setEditId] = useState(null);

  const openPopupHanelder = () => {
    setOpenPopup(true);
  };
  const closeAddPopupHandler = () => {
    setOpenPopup(false);
  };

  const setEditIdHandler = (id) => {
    setEditId(id);
  };
  const { data: address, isLoadingAddresss, isFetching } = useAddressQuery();
  //   if(isLoadingAddresss){
  //     return <div>Loading ad</div>
  //   }
  return (
    <>
      {openPopup || editId !== null ? (
        <AddressPopup
          closePopupHandler={closeAddPopupHandler}
          setEditIdHandler={setEditIdHandler}
          {...(editId !== null && {
            info: address.find((ad) => ad.id === editId),
          })}
        />
      ) : (
        <>
          <div className="fixed inset-0  bg-slate-300 max-h-screen h-full  opacity-40  z-50 "></div>
          <div className="flex justify-center items-center h-screen fixed inset-0  z-50 overflow-hidden">
            <div className="inline-block  w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
              <div className="w-full flex justify-between">
                <p class="text-lg font-medium">Select Address</p>
                <XIcon
                  className="h-6 w-6 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-700 hover:text-gray-900"
                  onClick={() => {
                    setEditIdHandler(null);
                    closePopupHandler();
                  }}
                />
              </div>
              <div className="mt-4">
                <article class=" ">
                  <ul class="mt-4 space-y-2">
                    {address?.map((item) => (
                      <li>
                        <AddressCard
                          isDelete={true}
                          isUpdate={true}
                          item={item}
                          setEditIdHandler={setEditIdHandler}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className=" mt-3 px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                      onClick={openPopupHanelder}
                    >
                      Add new address
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddressListPopup;
