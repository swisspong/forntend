import React from "react";
import ProductItemV2 from "../../../components/ProductItemV2";
import SidebarItem from "../../../components/SidebarItem";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "/product",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
const categories = [
  { id: 1, name: "All Categories" },
  {
    id: 2,
    name: "Jeans",
    sub: [
      { id: 3, name: "Men", sub: [{ id: 5, name: "Long Jeans" }] },
      { id: 4, name: "Women" },
    ],
  },
  {
    id: 6,
    name: "Suits",
    sub: [
      { id: 3, name: "Men" },
      { id: 4, name: "Women" },
    ],
  },
];
const Search = () => {
  return (
    <>
      <section className=" ">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div className="lg:sticky lg:top-20">
              <div open className="overflow-hidden border border-gray-200">
                {/* <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                  <span className="text-sm font-medium">Categories</span>

                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary> */}
                <form className="border-t border-gray-200 lg:border-t-0">
                  <fieldset>
                    <legend class="block w-full px-2 py-3 text-xs font-medium bg-gray-50">
                      Category
                    </legend>

                    <div class="px-1 py-6 space-y-2">
                      {categories.map((item) => (
                        <SidebarItem key={item.id} item={item} />
                      ))}
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  <span className="hidden sm:inline">Showing </span>6 of 24
                  Products
                </p>
              </div>
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 mt-4  sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                  <ProductItemV2
                    key={product.id}
                    color={product.color}
                    href={product.href}
                    imageAlt={product.imageAlt}
                    imageSrc={product.imageSrc}
                    name={product.name}
                    price={product.price}
                  />
                ))}
                <div className="col-span-3 flex justify-center mt-10">
                  <ul className="flex">
                    <li>
                      <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                        Prev
                      </button>
                    </li>
                    <li>
                      <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 ">
                        1
                      </button>
                    </li>
                    <li>
                      <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                        2
                      </button>
                    </li>
                    <li>
                      <button className="h-10 px-5 text-white bg-gray-600 border border-r-0 border-gray-600 ">
                        3
                      </button>
                    </li>
                    <li>
                      <button className="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100">
                        Next
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
