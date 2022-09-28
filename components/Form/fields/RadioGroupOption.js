import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Field } from "formik";
import React from "react";

const RadioGroupOption = ({ name, optionGroup, ...otherProps }) => {
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
                      <li className="h-full">
                        <input
                          type="radio"
                          id={option.id}
                          {...field}
                          value={option.id}
                          checked={option.id === Number(field.value)}
                          className="hidden peer"
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
                          />

                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:border-blue-600 peer-checked:text-blue-600`}
                          >
                            {option.name}   (+ ${option.price})
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
