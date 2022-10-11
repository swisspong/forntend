import React, { useState } from "react";

const UploadSlipPreview = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const imagesubmission = () => {
    if (checkFile) {
      alert("File Uploaded");
      console.log(selectedFile);
    } else {
      alert("select a file");
    }
  };

  return (
    <div className="grid gap-2">
      <div className="h-24 cursor-pointer relative flex justify-center items-center border-2 bg-gray-200">
        <input
          type="file"
          name="file"
          onChange={imageHandler}
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
      </div>
      <button
        onClick={imagesubmission}
        className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5  md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadSlipPreview;
