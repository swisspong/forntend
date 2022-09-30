import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Field, useFormikContext } from "formik";
import React from "react";

const RadioGroupOption = ({ name, optionGroup, ...otherProps }) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full py-2 bg-gray-100">
            <legend className="text-sm font-medium">{optionGroup.name}</legend>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-1 pt-4 pb-2">
            <Field name={name} {...otherProps}>
              {({ field }) => {
                return optionGroup.showImage ? (
                  <ul class="grid gap-6 w-full grid-cols-3 md:grid-cols-4 ">
                    {optionGroup.options.map((option, i) => (
                      <li className="h-full relative">
                        {/* {!optionGroup.manyRelate &&
                          option.optionInventoryList[0].inventory.quantity <=
                            0 && (
                            <div className="absolute inset-0 z-50  transition-opacity border rounded-lg">
                              <div className="flex h-full items-center ">
                                <p className="py-4 text-lg bg-white bg-opacity-80 text-center w-full">
                                  out of stock
                                </p>
                              </div>
                            </div>
                          )} */}
                        <input
                          type="radio"
                          id={option.id}
                          {...field}
                          onChange={() => {
                            // values.options
                            //   .filter(
                            //     (filterItem) =>
                            //       optionGroup.id !==
                            //       Number(Object.keys(filterItem)[0])
                            //   )
                            //   .every(
                            //     (option) => Object.values(option)[0] !== ""
                            //   );
                            setFieldValue("quantity", 1);
                            setFieldValue(name, option.id);
                            console.log("test", values);
                          }}
                          value={option.id}
                          checked={option.id === Number(field.value)}
                          className="hidden peer"
                          // disabled={
                          //   !optionGroup.manyRelate &&
                          //   option.optionInventoryList[0].inventory.quantity <=
                          //     0
                          // }
                        ></input>
                        <label
                          htmlFor={option.id}
                          className="h-full inline-block w-full overflow-hidden cursor-pointer border-gray-200 border rounded-lg p-1  peer-checked:border-blue-600 peer-checked:text-blue-600 "
                        >
                          <div>
                            {/* <h5 class="font-bold">Smart Watch</h5> */}
                          </div>

                          <div class="aspect-w-1 aspect-h-1">
                            <img
                              loading="lazy"
                              alt="Smart Watch"
                              class="object-cover"
                              // src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
                              src={option.image.path}
                            />
                          </div>
                          <p class="text-xs font-medium break-all">
                            {option.name}
                          </p>
                          <p class="mt-1 text-xs font-medium">
                            (+ ${option.price})
                          </p>
                        </label>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flow-root">
                    <div className="flex flex-wrap -m-0.5">
                      {optionGroup.options.map((option) => (
                        <label
                          htmlFor={option.id}
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            id={option.id}
                            {...field}
                            value={option.id}
                            checked={option.id === Number(field.value)}
                            className="sr-only peer"
                            // disabled={
                            //   !optionGroup.manyRelate &&
                            //   option.optionInventoryList[0].inventory
                            //     .quantity <= 0
                            // }
                          />

                          <span
                            className={`relative inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:border-blue-600 peer-checked:text-blue-600`}
                          >
                            {!optionGroup.manyRelate &&
                              option.optionInventoryList[0].inventory
                                .quantity <= 0 && (
                                <div className="absolute inset-0 z-50 bg-white bg-opacity-80 transition-opacity border rounded-full"></div>
                              )}
                            {option.name} (+ ${option.price})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              }}
            </Field>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default RadioGroupOption;
