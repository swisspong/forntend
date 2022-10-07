import { ArrowLeftIcon, TruckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import AddressPopup from "../../components/account/AddresPopup";
import AddressCard from "../../components/account/AddressCard";
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
  console.log(data);
  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto min-h-[calc(100vh-4rem)]">
   
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
            {data.map((item) => (
              <li>
          
                <AddressCard isDelete={true} isUpdate={true} item={item}/>
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
        
      )}

      {openPopup && <AddressPopup closePopupHandler={closePopupHandler} />}
    </div>
  );
};

export default AddressPage;
