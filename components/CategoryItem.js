const CategoryItem = ({ name, imageSrc }) => {
  return (
    // <div className="py-5 px-5">
    //   <div className="w-56 h-72 relative flex-none group rounded-md overflow-hidden cursor-pointer transition ease-in transform hover:scale-105 hover:z-50">
    //     <img className="object-center w-56 h-72" src={imageSrc} />
    //     <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-t from-gray-900 opacity-50"></div>
    //     <div className="absolute w-full py-2.5 bottom-10 font-bold inset-x-0 text-white text-xl text-center transition-all duration-100 ease-in-out group-hover:text-2xl">
    //       {name}
    //     </div>
    //   </div>
    // </div>
    <div className="py-5 px-5 ">
      <div className="group relative cursor-pointer transition-all ease-in transform hover:scale-105 hover:z-50">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
          <img
            src={imageSrc}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>

        <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-t from-gray-900 opacity-50 rounded-md group-hover:opacity-10"></div>
        <div className="absolute w-full py-2.5 bottom-10 font-bold inset-x-0 text-white text-xl text-center transition-all duration-100 ease-in-out group-hover:text-2xl">
          {name}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
