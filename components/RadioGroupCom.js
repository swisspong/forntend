import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const RadioGroupCom = ({options}) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <div class="flex flex-wrap mt-2 gap-3 ">
        {options.map((option) => (
          <RadioGroup.Option key={option.name} value={option}>
            {({ checked }) => (
              <div className="group flex flex-col justify-center cursor-pointer relative">
                <div className="flex relative justify-center">
                  <img
                    className={`group object-cover w-16 h-16 block px-1 py-1 text-xs border rounded-md border-gray-200  peer-checked:bg-gray-100 ${
                      checked ? "bg-gray-100" : ""
                    }`}
                    src={option.imageSrc}
                  />
                  <div className="absolute -top-3 justify-center self-center z-50">
                    <strong class="h-6 px-2 text-xs rounded-md text-center text-white uppercase bg-black">
                      +{option.price}
                    </strong>
                  </div>
                </div>
                <div
                  className={`absolute h-full w-full top-0 right-0 bg-gray-900 opacity-0 rounded-md group-hover:opacity-60 ${
                    checked ? "opacity-60" : ""
                  }`}
                ></div>

                <p
                  className={`absolute bottom-3 text-white w-full ${
                    checked ? "block" : "hidden"
                  } group-hover:block inset-x-0  text-sm text-center tracking-wider`}
                >
                  {option.name}
                </p>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default RadioGroupCom;
