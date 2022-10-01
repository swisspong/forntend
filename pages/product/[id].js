import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ProductImageSlider from "../../components/ProductImageSlider";
import RadioGroupCom from "../../components/RadioGroupCom";
import RadioGroupComNoImage from "../../components/RadioGroupComNoImage";
import RadioGroupImage from "../../components/RadioGroupImage";
import RadioGroupNoImage from "../../components/RadioGroupNoImage";

import "swiper/css/thumbs";
import "swiper/css/navigation";
import "../../node_modules/swiper/swiper-bundle.css";
import { Form, Formik } from "formik";
import {
  useAddToCart,
  useAddToCartMutation,
  useCart,
} from "../../hooks/useCart";
import { useRouter } from "next/router";
import axios from "axios";
import * as Yup from "yup";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import FormikControl from "../../components/Form/FormikController";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { useState } from "react";
const fetchProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/api/v1/product/${id}`);
  return res.json();
};
const productDetail2 = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useQuery(["products", id], () => fetchProduct(id));
  const validationSchema = Yup.object({
    // quantity: Yup.string().required().min(3),
  });
  const { mutate } = useAddToCartMutation();
  const { isFetching, ...queryInfo } = useCart();
  const [initError, setInitError] = useState(true);

  const findMinQuantity = (formik, product) => {
    let inventoryQ = formik.values.options.map((option) => {
      const optionGroup = product.optionGroupList.find(
        (optionGroup) => optionGroup.id === Number(Object.keys(option)[0])
      );

      const optionFound = optionGroup.options.find(
        (optionTmp) => optionTmp.id === Number(Object.values(option)[0])
      );
      return optionFound.optionInventoryList[0].inventory.quantity;
    });

    inventoryQ.push(product.availableStock);
    return inventoryQ.reduce((acc, cur) => {
      return acc < cur ? acc : cur;
    });
  };

  const findMinQuantity2 = (formik, product) => {
    // config backend filter forget return

    let inventoryQ = formik.values.options
      .filter((option) =>
        product.optionGroupList
          .filter((optionGroup) => !optionGroup.manyRelate)
          .find(
            (optionGroup) => optionGroup.id === Number(Object.keys(option)[0])
          )
          ? true
          : false
      )
      .map((option) => {
        const optionGroup = product.optionGroupList.find(
          (optionGroup) => optionGroup.id === Number(Object.keys(option)[0])
        );

        const optionFound = optionGroup.options.find(
          (optionTmp) => optionTmp.id === Number(Object.values(option)[0])
        );
        return optionFound.optionInventoryList[0].inventory.quantity;
      });
    console.log("inq", inventoryQ);

    let duplicateElement = [];
    const array2d = formik.values.options
      .filter((option) =>
        product.optionGroupList
          .filter((optionGroup) => optionGroup.manyRelate)
          .find(
            (optionGroup) => optionGroup.id === Number(Object.keys(option)[0])
          )
          ? true
          : false
      )
      .map((option) => {
        const optionGroup = product.optionGroupList.find(
          (optionGroup) => optionGroup.id === Number(Object.keys(option)[0])
        );

        const optionFound = optionGroup.options.find(
          (optionTmp) => optionTmp.id === Number(Object.values(option)[0])
        );
        return optionFound.optionInventoryList;
      });
    console.log("array2d", array2d);
    array2d.forEach((array) => {
      duplicateElement = [...duplicateElement, ...array];
    });
    console.log("dup", duplicateElement);
    duplicateElement = duplicateElement.filter((item, index) => {
      return (
        duplicateElement.findIndex(
          (ele) => ele.inventory.id === item.inventory.id
        ) !== index
      );
    });
    console.log("dup step1", duplicateElement);
    duplicateElement = duplicateElement.filter((item, index) => {
      return (
        duplicateElement.findIndex(
          (ele) => ele.inventory.id === item.inventory.id
        ) === index
      );
    });
    console.log("dup step2", duplicateElement);
    duplicateElement = duplicateElement.map((item) => item.inventory.quantity);

    duplicateElement = [...duplicateElement, ...inventoryQ];
    console.log("dup step3", duplicateElement);
    duplicateElement.push(product.availableStock);
    // console.log(duplicateElement);
    return duplicateElement.reduce((acc, cur) => {
      return acc < cur ? acc : cur;
    });
  };
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8  md:grid-cols-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
              <ProductImageSlider
                images={product.productImage.map((item) => item.image.path)}
              />
            </div>

            <div className="sticky top-0">
              <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
                Pre Order
              </strong>

              <div className="flex justify-between mt-8">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{product.name}</h1>

                  <p className="mt-0.5 text-sm">Highest Rated Product</p>

                  <div className="flex mt-2 -ml-0.5">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">
                  ${Number(product.price).toFixed(2)}
                </p>
              </div>

              <details className="relative mt-4 group">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa veniam dicta beatae eos ex error culpa delectus rem
                        tenetur, architecto quam nesciunt, dolor veritatis nisi
                        minus inventore, rerum at recusandae?
                      </p>
                    </div>

                    <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div className="pb-6 prose max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>
              <Formik
                initialValues={{
                  quantity: 1,

                  options: product.optionGroupList
                    .filter((item) => item.allowStatus)
                    .map((item) => ({ [item.id]: "" })),
                }}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log("formik values", values, id);
                  mutate({ id: Number(id), ...values });
                }}
              >
                {(formik) => {
                  // console.log(formik.values);
                  return (
                    <Form className="mt-8" onSubmit={formik.handleSubmit}>
                      {product.optionGroupList.length > 0 &&
                        product.optionGroupList
                          .filter(
                            (optionGroupFilter) => optionGroupFilter.allowStatus
                          )
                          .map((optionGroup, index) => (
                            <fieldset className={index !== 0 && "mt-4"}>
                              <FormikControl
                                control={"radioGroupOption"}
                                name={`options.${index}.${optionGroup.id}`}
                                optionGroup={optionGroup}
                                optionGroupManyRelateList={product.optionGroupList.filter(
                                  (optionGroupFilter) =>
                                    optionGroupFilter.allowStatus &&
                                    optionGroupFilter.manyRelate
                                )}
                              />
                            </fieldset>
                          ))}

                      {/* <div className="flex mt-8">
                        <div>
                          <label for="quantity" className="sr-only">
                            Qty
                          </label>

                          <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.quantity}
                            min="1"
                            className="w-12 py-3 text-xs text-center border-gray-200 rounded [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                        >
                          Add to Cart
                        </button>
                      </div> */}
                      <div className="flex justify-start mt-8">
                        <input
                          className=" w-20"
                          type="number"
                          disabled
                          value={formik.values.quantity}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (
                              formik.values.options.every(
                                (option) => Object.values(option)[0] !== ""
                              ) &&
                              formik.values.quantity < product.availableStock
                            ) {
                              console.log(true);
                              formik.setFieldValue(
                                "qunatity",
                                (formik.values.quantity += 1)
                              );
                            }
                          }}
                          className="flex border-accent-2 items-center border p-1"
                        >
                          <PlusIcon className="h-6 w-6" />
                        </button>
                        <button
                          type="button"
                          className="flex items-center border-accent-2 border p-1"
                          // onClick={() => {
                          //   setQuantity((prevState) => {
                          //     if (prevState > 1) {
                          //       updateCartItem({
                          //         id: cartItem.productId,
                          //         quantity: prevState - 1,
                          //       });
                          //       return prevState - 1;
                          //     } else {
                          //       return prevState;
                          //     }
                          //   });
                          // }}
                        >
                          <MinusIcon className="h-6 w-6" />
                        </button>
                        <button
                          // disabled={formik.va}
                          type="submit"
                          className={`block px-5 py-3 ml-3 text-xs font-medium text-white 
                          
                              bg-green-600 hover:bg-green-500
                           
                            rounded `}
                          // className={`block px-5 py-3 ml-3 text-xs font-medium text-white
                          // ${
                          //   initError
                          //     ? "bg-red-400"
                          //     : formik.isValid
                          //     ? "bg-green-600 hover:bg-green-500"
                          //     : "bg-red-400"
                          // }
                          //   rounded `}
                        >
                          Add to Cart
                        </button>
                      </div>
                      {formik.values.options.every(
                        (option) => Object.values(option)[0] !== ""
                      ) ? (
                        <a className="">
                          available {findMinQuantity2(formik, product)}
                        </a>
                      ) : (
                        <a className="text-red-500">must be select options</a>
                      )}
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <h2 class="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

          <div class="flex items-center mt-4">
            <p class="text-3xl font-medium">
              3.8
              <span class="sr-only"> Average review score </span>
            </p>

            <div class="ml-4">
              <div class="flex -ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <p class="mt-0.5 text-xs text-gray-500">Based on 48 reviews</p>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            <blockquote>
              <header class="sm:items-center sm:flex">
                <div class="flex -ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                  The best thing money can buy!
                </p>
              </header>

              <p class="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                possimus fuga dolor rerum dicta, ipsum laboriosam est totam
                iusto alias incidunt cum tempore aliquid aliquam error quisquam
                ipsam asperiores! Iste?
              </p>

              <footer class="mt-4">
                <p class="text-xs text-gray-500">
                  John Doe - 12th January, 2024
                </p>
              </footer>
            </blockquote>

            <blockquote>
              <header class="sm:items-center sm:flex">
                <div class="flex -ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                  The best thing money can buy!
                </p>
              </header>

              <p class="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                possimus fuga dolor rerum dicta, ipsum laboriosam est totam
                iusto alias incidunt cum tempore aliquid aliquam error quisquam
                ipsam asperiores! Iste?
              </p>

              <footer class="mt-4">
                <p class="text-xs text-gray-500">
                  John Doe - 12th January, 2024
                </p>
              </footer>
            </blockquote>

            <blockquote>
              <header class="sm:items-center sm:flex">
                <div class="flex -ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                  The best thing money can buy!
                </p>
              </header>

              <p class="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                possimus fuga dolor rerum dicta, ipsum laboriosam est totam
                iusto alias incidunt cum tempore aliquid aliquam error quisquam
                ipsam asperiores! Iste?
              </p>

              <footer class="mt-4">
                <p class="text-xs text-gray-500">
                  John Doe - 12th January, 2024
                </p>
              </footer>
            </blockquote>

            <blockquote>
              <header class="sm:items-center sm:flex">
                <div class="flex -ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                  The best thing money can buy!
                </p>
              </header>

              <p class="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                possimus fuga dolor rerum dicta, ipsum laboriosam est totam
                iusto alias incidunt cum tempore aliquid aliquam error quisquam
                ipsam asperiores! Iste?
              </p>

              <footer class="mt-4">
                <p class="text-xs text-gray-500">
                  John Doe - 12th January, 2024
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};
export default productDetail2;

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  console.log(params);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products", id], () => fetchProduct(id));
  // const res = await fetch(`http://localhost:5000/api/v1/product/${id}`);
  // const response = await res.json();
  // return {
  //   props: { product: response },
  //   revalidate: 10,
  // };
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 10 };
};
// export const getStaticProps = async ({ params }) => {
//   const { id } = params;

//   const res = await fetch(`http://localhost:5000/api/v1/product/${id}`);
//   const response = await res.json();
//   return {
//     props: { product: response },
//     revalidate: 10,
//   };
// };
export const getStaticPaths = async () => {
  const url = `http://localhost:5000/api/v1/product?page=1&per_page=100`;

  const res = await fetch(url);
  const products = await res.json();
  console.log(products);
  const paths = products.data.map((product) => {
    return {
      params: { id: String(product.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
