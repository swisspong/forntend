import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "../node_modules/swiper/swiper-bundle.css";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
  return (
    <>
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl tracking-tight">Shop by Category</h2>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            650: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            850: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Autoplay, Navigation]}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryItem name={category.name} imageSrc={category.imageSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CategoryList;
