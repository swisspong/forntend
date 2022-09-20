import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Controller,
  FreeMode,
  Lazy,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";
// import "../node_modules/swiper/swiper-bundle.css";
import {  useEffect, useState } from "react";

const ProductImageSlider = ({ images }) => {
  // Swiper thumbsinstance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <div>
      <Swiper
        // {...params}
        style={
          {
            // "--swiper-navigation-color": "#fff",
            // "--swiper-pagination-color": "#fff",
          }
        }
        
        spaceBetween={2}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-w-1 aspect-h-1">
              <img
                alt="Mobile Phone Stand"
                className="object-cover rounded-xl"
                src={item}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={6}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay,Thumbs]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="py-3 ">
              <div className="group relative cursor-pointer transition-all ease-in transform hover:scale-105 hover:z-50">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                  <img
                    src={item}
                    className=" object-center object-cover rounded-lg"
                  />
                </div>

                <div
                  className="absolute w-full h-full inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 opacity-50 
         group-hover:opacity-10 rounded-xl"
                ></div>
                <div className="absolute w-full py-2.5 bottom-10 font-bold inset-x-0 text-white text-xl text-center transition-all duration-100 ease-in-out group-hover:text-2xl">
                  {""}
                </div>
              </div>
            </div>
            {/* <CategoryItemV2 imageSrc={item} name={""} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
