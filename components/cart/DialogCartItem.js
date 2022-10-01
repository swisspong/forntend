import { Dialog, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { Fragment, useState } from "react";
import { useUpdateItemCartMutation } from "../../hooks/useCart";
import FormikControl from "../Form/FormikController";
const fetchProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/api/v1/product/${id}`);
  return res.json();
};
export default function DialogCartItem({ cartItem, productId }) {
  const { data, isLoading } = useQuery(["products", productId.toString()], () =>
    fetchProduct(productId)
  );
  const { mutate: updateCartItem } = useUpdateItemCartMutation();
  const [itemInfo, setItemInfo] = useState({
    quantity: cartItem.quantity,
    options: cartItem.cartItemDetail.map((cartItemDetail) => ({
      [cartItemDetail.optionGroupId]: cartItemDetail.optionId,
    })),
  });

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

  let [isOpen, setIsOpen] = useState(false);
  //   const queryClient = useQueryClient();
  //   console.log(queryClient.getQueryData(["products", productId.toString()]));
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium block hover:bg-amber-200"
      >
        Edit
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {data.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        alt="Mobile Phone Stand"
                        className="object-cover rounded-xl"
                        src={data.productImage[0].image.path}
                      />
                    </div>
                    <Formik
                      initialValues={itemInfo}
                      // initialValues={{
                      //   quantity: 1,

                      //   options: data.optionGroupList
                      //     .filter((item) => item.allowStatus)
                      //     .map((item) => ({ [item.id]: "" })),
                      // }}
                      enableReinitialize
                      // validationSchema={validationSchema}
                      onSubmit={(values) => {
                        console.log("formik values", values);
                        updateCartItem({
                          id: cartItem.productId,
                          quantity: values.quantity,
                          options: values.options,
                        });

                        //   mutate({ id: Number(id), ...values });
                      }}
                    >
                      {(formik) => {
                        // console.log(formik.values);
                        return (
                          <Form className="mt-8" onSubmit={formik.handleSubmit}>
                            {data.optionGroupList.length > 0 &&
                              data.optionGroupList
                                .filter(
                                  (optionGroupFilter) =>
                                    optionGroupFilter.allowStatus
                                )
                                .map((optionGroup, index) => (
                                  <fieldset className={index !== 0 && "mt-4"}>
                                    <FormikControl
                                      control={"radioGroupOption"}
                                      name={`options.${index}.${optionGroup.id}`}
                                      optionGroup={optionGroup}
                                      optionGroupManyRelateList={data.optionGroupList.filter(
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
                                      (option) =>
                                        Object.values(option)[0] !== ""
                                    ) &&
                                    formik.values.quantity <
                                      // data.availableStock
                                      findMinQuantity2(formik, data)
                                  ) {
                                    console.log(true);
                                    formik.setFieldValue(
                                      "quantity",
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
                                Edit
                              </button>
                            </div>
                            {formik.values.options.every(
                              (option) => Object.values(option)[0] !== ""
                            ) ? (
                              <a className="">
                                available {findMinQuantity2(formik, data)}
                              </a>
                            ) : (
                              <a className="text-red-500">
                                must be select options
                              </a>
                            )}
                          </Form>
                        );
                      }}
                    </Formik>
                    {/* <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Edit
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
