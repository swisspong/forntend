import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="max-w-2xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl tracking-tight">Customers also purchased</h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            color={product.color}
            href={product.href}
            imageAlt={product.imageAlt}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
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
  );
};

export default ProductList;
