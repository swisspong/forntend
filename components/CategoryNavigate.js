// Direct React component imports
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
// Styles must use direct files imports
import "../node_modules/swiper/swiper-bundle.css";
const CategoryNavigate = () => {
  return (
    <div className="relative">
      <Swiper
        id="main"
        slidesPerView={4}
        spaceBetween={10}
        navigation
        // grabCursor={true}
        // centeredSlides={true}

    
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <h2 className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-slate-600">
              Jeans
            </h2>
          </div>
        </SwiperSlide>
        
      </Swiper>
      {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-white h-10 w-1/12 z-50"></div> */}
    </div>
  );
};

export default CategoryNavigate;
