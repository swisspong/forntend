import React from "react";

const CategoryItemV2 = ({ name, imageSrc }) => {
  return (
    <div className="pb-10 pt-3 ">
      <div className="group relative cursor-pointer transition-all ease-in transform hover:scale-105 hover:z-50">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden">
          <img
            src={imageSrc}
            className=" object-center object-cover"
          />
        </div>

        <div
          className="absolute w-full h-full inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 opacity-50 
         group-hover:opacity-10"
        ></div>
        <div className="absolute w-full py-2.5 bottom-10 font-bold inset-x-0 text-white text-xl text-center transition-all duration-100 ease-in-out group-hover:text-2xl">
          {name}
        </div>
      </div>
    </div>
    // <a href="/product/smart-watch" className="block py-12">
    //   <div>
    //     <p className="text-xs text-indigo-500">Banana</p>

    //     <h5 className="font-bold">Smart Watch</h5>
    //   </div>

    //   <div className="aspect-w-1 aspect-h-1">
    //     <img
    //       alt="Smart Watch"
    //       className="object-cover"
    //       src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
    //     />
    //   </div>

    //   <p className="mt-1 text-sm font-medium text-gray-700">$49.99</p>
    // </a>
  );
};

export default CategoryItemV2;
