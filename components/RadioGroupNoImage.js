import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import productDetail from "../pages/product/test";

const RadioGroupNoImage = ({ name, options }) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <div className="flow-root">
        <div className="flex flex-wrap -m-0.5">
          {options.map((option) => (
            <label
              for={`${name}-${option.name}`}
              className="cursor-pointer p-0.5"
            >
              <input
                type="radio"
                name={name}
                id={`${name}-${option.name}`}
                className="sr-only peer"
              />

              <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:border-blue-600 peer-checked:text-blue-600">
                {option.name}
              </span>
            </label>
          ))}
        </div>
      </div>
      {/* <ul class="grid gap-6 w-full grid-cols-3 md:grid-cols-4 ">
        {options.map((option, i) => (
          <RadioGroup.Option key={option.name} value={option}>
            {({ checked }) => (
              <li className="h-full">
                <input
                  type="radio"
                  id={"hosting-small" + i}
                  name="hosting"
                  value={"hosting-small" + i}
                  className="hidden peer"
                  required
                ></input>
                <label
                  for={"hosting-small" + i}
                  className="h-full inline-block w-full overflow-hidden cursor-pointer border-gray-200 border rounded-lg p-1  peer-checked:border-blue-600 peer-checked:text-blue-600 "
                >
                  <div class="aspect-w-1 aspect-h-1">
                    <img
                      loading="lazy"
                      alt="Smart Watch"
                      class="object-cover"
                      // src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
                      src={option.image.path}
                    />
                  </div>
                  <p class="text-xs font-medium break-all">{option.name}</p>
                  <p class="mt-1 text-xs font-medium">(+ ${option.price})</p>
                </label>
              </li>
            )}
          </RadioGroup.Option>
        ))}
      </ul> */}
    </RadioGroup>
  );
};

export default RadioGroupNoImage;
