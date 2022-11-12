import ProductItemV2 from "./ProductItemV2";

const ProductListV2 = ({ products }) => {
  return (
    <div className="max-w-screen-xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl tracking-tight font-medium">All Products</h2>
        <a
          href="/product/search"
          className="text-sm tracking-tight cursor-pointer hover:text-gray-600 "
        >
          See All
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 place-items-stretch sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductItemV2
            key={product.id}
            // color={product.color}
            href={product.id}
            // imageAlt={product.imageAlt}
            // imageSrc={product.imageSrc}
            category={product.category?.name}
            imageSrc={product.productImage[0].image.path}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      {/* <div className="flex justify-center mt-10">
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
      </div> */}
    </div>
  );
};

export default ProductListV2;
