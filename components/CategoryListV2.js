import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "../node_modules/swiper/swiper-bundle.css";
import CategoryItemV2 from "./CategoryItemV2";


const CategoryListV2 = ({ categories }) => {
 
  return (
    <section>
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
       <div className="text-center">

          <p className="text-2xl  font-medium">Shop by Category</p>
       </div>
      
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mt-8"
        >
          {categories.map(category=>(
            <SwiperSlide key={category.id}>
              <CategoryItemV2 imageSrc={category.imageSrc} name={category.name}/>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <a href="/product/smart-watch" className="block py-12">
              <div>
                <p className="text-xs text-indigo-500">Banana</p>

                <h5 className="font-bold">Smart Watch</h5>
              </div>

              <div className="aspect-w-1 aspect-h-1">
                <img
                  loading="lazy"
                  alt="Smart Watch"
                  className="object-cover"
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                />
              </div>

              <p className="mt-1 text-sm font-medium text-gray-700">$49.99</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/product/smart-watch" className="block py-12">
              <div>
                <p className="text-xs text-indigo-500">Banana</p>

                <h5 className="font-bold">Smart Watch</h5>
              </div>

              <div className="aspect-w-1 aspect-h-1">
                <img
                  loading="lazy"
                  alt="Smart Watch"
                  className="object-cover"
                  src="https://images.pexels.com/photos/4553185/pexels-photo-4553185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </div>

              <p className="mt-1 text-sm font-medium text-gray-700">$49.99</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/product/smart-watch" className="block py-12">
              <div>
                <p className="text-xs text-indigo-500">Banana</p>

                <h5 className="font-bold">Smart Watch</h5>
              </div>

              <div className="aspect-w-1 aspect-h-1">
                <img
                  loading="lazy"
                  alt="Smart Watch"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
                />
              </div>

              <p className="mt-1 text-sm font-medium text-gray-700">$49.99</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/product/smart-watch" className="block py-12">
              <div>
                <p className="text-xs text-indigo-500">Banana</p>

                <h5 className="font-bold">Smart Watch</h5>
              </div>

              <div className="aspect-w-1 aspect-h-1">
                <img
                  loading="lazy"
                  alt="Smart Watch"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
                />
              </div>

              <p className="mt-1 text-sm font-medium text-gray-700">$49.99</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/product/smart-watch" className="block py-12">
              <div>
                <p className="text-xs text-indigo-500">Banana</p>

                <h5 className="font-bold">Smart Watch</h5>
              </div>

              <div className="aspect-w-1 aspect-h-1">
                <img
                  loading="lazy"
                  alt="Smart Watch"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
                />
              </div>

              <p className="mt-1 text-sm font-medium text-gray-700">$49.99</p>
            </a>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoryListV2;
