const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  items-center border border-white border-b-gray-100 mb-10">
      <div className="flex p-10 md:p-8 items-center justify-center w-full h-80 md:h-96 lg:w-full">
        <img
          className="object-cover w-full h-full max-w-2xl"
          src="https://source.unsplash.com/user/erondu/1600x900"
          alt="apple watch photo"
        />
      </div>
      <div className="md:order-first flex bg-gray-100  px-4 md:px-20  py-6 md:py-48 flex-col items-center">
        <div className="max-w-md">
          <h1 className="text-3xl tracking-wide text-white text-gray-800 lg:text-4xl">
            Set your title
          </h1>
          <p className="mt-4 text-gray-300 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
            asperiores alias vero magnam recusandae adipisci ad vitae laudantium
            quod rem voluptatem eos accusantium cumque.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-800 inline hover:bg-blue-400"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div className="grid grid-cols-1 md:grid-cols-2  items-center border border-white border-b-gray-100 mb-10">
    //     <div className="flex bg-gray-100 pl-32 py-48 flex-col items-center w-full lg:flex-row lg:w-full">
    //         <div className="max-w-lg">
    //             <h1 className="text-3xl tracking-wide text-white text-gray-800 lg:text-4xl">Set your title</h1>
    //             <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
    //                 adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
    //                 laudantium quod rem voluptatem eos accusantium cumque.</p>
    //             <div className="mt-6">
    //                 <a href="#"
    //                     className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-800  lg:inline hover:bg-blue-400">Download
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="flex px-2 items-center justify-center w-full h-96 lg:w-full">
    //         <img className="object-cover w-full h-full max-w-2xl"
    //             src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo"/>
    //     </div>
    // </div>

    // <div className="flex  items-center border border-white border-b-gray-100 mb-10">
    //     <div className="flex bg-gray-100 pl-32 py-48 flex-col items-center w-full lg:flex-row lg:w-1/2">
    //         <div className="max-w-lg">
    //             <h1 className="text-3xl tracking-wide text-white text-gray-800 lg:text-4xl">Set your title</h1>
    //             <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
    //                 adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
    //                 laudantium quod rem voluptatem eos accusantium cumque.</p>
    //             <div className="mt-6">
    //                 <a href="#"
    //                     className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-800  lg:inline hover:bg-blue-400">Download
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="flex pr-32 items-center justify-center w-full h-96 lg:w-1/2">
    //         <img className="object-cover w-full h-full max-w-2xl"
    //             src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo"/>
    //     </div>
    // </div>
  );
};

export default HeroSection;
