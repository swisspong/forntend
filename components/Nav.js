const Nav = () => {
  return (
    <nav className="relative">
      <div className="flex text-2xl py-2 px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
          Jeans
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
          Jackets
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
          Pants
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
          Suits
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
          Shirts
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
          More
        </h2>
       
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-white h-10 w-1/12"></div>
    </nav>
  );
};

export default Nav;
