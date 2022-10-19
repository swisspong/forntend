import Head from "next/head";
import Image from "next/image";
import CategoryNavigate from "../components/CategoryNavigate";
import Header from "../components/Header";
import HeaderV2 from "../components/HeaderV2";
import Nav from "../components/Nav";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
// Styles must use direct files imports
import Cookies from "js-cookie";
import "../node_modules/swiper/swiper-bundle.css";
import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import HeroSectionV2 from "../components/HeroSectionV2";
import CategoryListV2 from "../components/CategoryListV2";
import ProductListV2 from "../components/ProductListV2";
import MyFooter from "../components/MyFooter";
import ProductListLocalData from "../components/ProductListLocalData";
import { useEffect } from "react";


import axios from "axios";
import { useCart } from "../hooks/useCart";




const products = [
  {
    id: 1,
    name: "เสื้อเชิร์ตแขนยาว",
    href: "/product",
    imageSrc: "https://cdn2.stylicy.com/global/image-1684-29402125-1-big.jpg",
    // "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "฿590.00",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/e7c2ebfc_1088.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://cf.shopee.ph/file/b12509df5340bbd6bcfffa2ad48f3110",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://essentialoil.wu.ac.th/wp-content/uploads/2015/01/jacket2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.theblacktux.com/products/suits/light-grey-suit/1_161129_TBT_Ecom_Light_Gray_Suit_2_1262_w1_1812x1875.jpg?width=1024",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://media.gq-magazine.co.uk/photos/604a389378d908f40e6180ae/master/w_1920,h_1280,c_limit/Jeans_0006_Polo%20raplh%20lauren.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/425770/item/goods_62_425770.jpg?width=1600&impolicy=quality_75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
const categories = [
  {
    id: 1,
    name: "Shirts",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "Jeans",
    imageSrc:
      "https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    name: "Suits",
    imageSrc:
      "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "Jackets",
    imageSrc:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    name: "Dresses",
    imageSrc:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80",
  },
];


export default function Home({ productList }) {
  
  const { isFetching, ...queryInfo } = useCart()
  return (
    <div>
      <Head>
        <title>Custom Cloth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionV2 />
      {/* <HeroSection /> */}
      <CategoryListV2 categories={categories} />
      {/* <CategoryList categories={categories} /> */}
      {/* <ProductList products={products} /> */}
      {/* <ProductListLocalData products={products} /> */}
      <ProductListV2 products={productList} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/product?page=1&per_page=10"
  );

  const response = await res.json();

  return {
    props: { productList: response.data },
    revalidate: 10,
  };
};
