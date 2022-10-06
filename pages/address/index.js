import { ArrowLeftIcon, TruckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import AddressPopup from "../../components/account/AddresPopup";
import { useAddressQuery } from "../../hooks/useUser";

const AddressPage = () => {
  const { data, isLoading, isFetching } = useAddressQuery();
  const [openPopup, setOpenPopup] = useState(false);
  const openPopupHanelder = () => {
    setOpenPopup(true);
  };
  const closePopupHandler = () => {
    setOpenPopup(false);
  };
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto min-h-[calc(100vh-4rem)]">
      {/* // <h2 class="text-lg font-medium mb-1"> Address </h2> */}
      <h1 className="text-2xl font-bold lg:text-3xl">Address</h1>
      {data.length <= 0 ? (
        <>
          <div className="mt-16 flex justify-center">
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
              onClick={openPopupHanelder}
            >
              Create new address
            </button>
          </div>
        </>
      ) : (
        <article class="  p-4">
          <ul class="mt-4 space-y-2">
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
          </div>
        </article>
      )}

      {openPopup && <AddressPopup closePopupHandler={closePopupHandler} />}
    </div>
  );
};

export default AddressPage;
