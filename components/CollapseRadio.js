import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import RadioGroupCom from "./RadioGroupCom";

const CollapseRadio = ({ name, options }) => {
  return (
    <fieldset>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 bg-gray-100">
              <legend className="text-lg font-bold">{name}</legend>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-1 pt-4 pb-2">
              <RadioGroupCom options={options} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </fieldset>
  );
};

export default CollapseRadio;
