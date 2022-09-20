import Link from "next/link";

const ProductItemV2 = ({
  imageSrc,
  imageAlt,
  href,
  name,
  color,
  category,
  price,
}) => {
  return (
    <div className="group relative place-self-stretch">
      <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75">
        <img
          src={imageSrc}
          // alt={imageAlt}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${href}`}>
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default ProductItemV2;
