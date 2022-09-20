import { ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";
const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  if (item.sub) {
    return (
      <div className="pl-3 space-y-2">
        <div className="flex justify-between">
          <a href="#" className="text-sm font-medium">
            {item.name}
          </a>

          <ChevronUpIcon
            className={`h-5 w-5 ${!open && "transform rotate-180"}`}
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </div>
        <div className={open ? "space-y-2 text-sm font-medium" : "hidden"}>
          {item.sub.map((sub) => (
            <SidebarItem key={sub.id} item={sub} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="pl-3  space-y-2">
        <div className="flex justify-between">
          <a href="#" className="text-sm font-medium">
            {item.name}
          </a>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
