import { TrashIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import {
  useAddSlipMutation,
  useEditOrderSlipMutation,
} from "../../hooks/useOrder";

const UploadSlipPreview = ({ orderId }) => {
  const { data, mutate, isLoading, isSuccess } = useAddSlipMutation();
  const { mutate: updateOrderSlip } = useEditOrderSlipMutation();
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);


  const imageHandler2 = (e) => {
    var formData = new FormData();
    formData.append("asset", e.target.files[0]);
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
    mutate(formData);
  };


  const imagesubmission = () => {
    if (checkFile && isSuccess) {
      console.log(data.data.result.id);
      const body = {
        id: orderId,
        values: { assetId: data.data.result.id },
      };
      // alert("File Uploaded");
      console.log(body);
      updateOrderSlip(body);

      console.log(selectedFile);
    } else {
      alert("select a file");
    }
  };

  return (
    <>
      <div className="p-2 border-dashed border-2 border-indigo-600 grid gap-2 justify-items-center md:grid-cols-2 lg:grid-cols-4">
        <div className=" w-full h-full border border-indigo-600 relative">
          <div className="absolute top-1 right-1 p-1 bg-white rounded-full border border-red-600">
            <TrashIcon width={20} height={20} className=" text-red-600" />
          </div>
          <img
            className={`rounded h-32 mx-auto object-contain `}
            src={selectedFile ? URL.createObjectURL(selectedFile) : null}
          />
        </div>

      
      </div>
      <div className="flex justify-center">
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <input
            type="file"
            onChange={imageHandler2}
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0 file:text-sm file:font-semibold
     file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100
    "
          />
        </label>
      </div>
      <div className="grid ">
        {/* <div className=" py-2 cursor-pointer relative flex justify-center items-center border-2 bg-gray-200">
          <input
            type="file"
            name="file"
            onChange={imageHandler2}
            className="z-20 opacity-0 cursor-pointer h-full w-full"
          />
          <div className="absolute flex justify-center items-center  ">
            <span className="text-[18px]  truncate">
              {checkFile ? selectedFile.name : "choose a file"}
            </span>
          </div>
        </div> */}
        {/* <div className="h-24 cursor-pointer relative flex justify-center items-center border-2 bg-gray-200">
          <input
            type="file"
            name="file"
            onChange={imageHandler2}
            className="z-20 opacity-0 cursor-pointer h-full w-full"
          />
          <div className="absolute flex justify-center items-center gap-2">
            <img
              className={`h-10 w-10 rounded-full ${
                checkFile ? "opacity-1" : "opacity-0"
              }`}
              src={selectedFile ? URL.createObjectURL(selectedFile) : null}
            />
            <span className="text-[18px] w-56 truncate">
              {checkFile ? selectedFile.name : "choose a file"}
            </span>
          </div>
        </div> */}
        <button
          disabled={isLoading}
          onClick={imagesubmission}
          className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5  md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
        >
          Upload
        </button>
      </div>
    </>
  );
};

export default UploadSlipPreview;
