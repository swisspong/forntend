import React, { useState } from "react";
import { useDeleteAddressMutation } from "../../hooks/useUser";
import AddressPopup from "./AddresPopup";

const AddressCard = ({
  item,
  isDelete = false,
  isUpdate = false,
  setEditIdHandler = null,
  selectAdressIdHandler = null,
  closeParentPopupHandler = null,
}) => {
  const { mutate: deleteAddress, isSuccess } = useDeleteAddressMutation();
  const [openPopup, setOpenPopup] = useState(false);

  const openPopupHanelder = () => {
    setOpenPopup(true);
  };
  const closePopupHandler = () => {
    setOpenPopup(false);
  };
  return (
    <>
      <div
        class={`${
          selectAdressIdHandler && "cursor-pointer"
        } flex items-center  space-x-5  h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600`}
        onClick={() => {
          if (selectAdressIdHandler) {
            selectAdressIdHandler(item.id);
            if (closeParentPopupHandler) {
              closeParentPopupHandler();
            }
          }
        }}
      >
        <div className="grow">
          <h5 class="font-medium ">{item.recipientName}</h5>

          <p class="mt-1 text-xs  text-gray-500">
            {item.address}
            {/* 428/1-2 ม.1 ตำบลหนองแสง อำเภอวาปีปทุม จังหวัดหมาสารคาม */}
          </p>

          <h5 class="mt-1 text-gray-500">
            {/* 087-424-6651 */}
            {item.phone}
          </h5>
        </div>
        {isDelete && (
          <button
            type="button"
            className=" px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            onClick={() => {
              deleteAddress(item.id);
            }}
          >
            Delete
          </button>
        )}
        {isUpdate && (
          <button
            type="button"
            className=" px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            onClick={() => {
              if (setEditIdHandler) {
                setEditIdHandler(item.id);
              } else {
                openPopupHanelder();
              }
            }}
          >
            Edit
          </button>
        )}
        {!setEditIdHandler && openPopup && (
          <AddressPopup closePopupHandler={closePopupHandler} info={item} />
        )}
      </div>
    </>
  );
};

export default AddressCard;
