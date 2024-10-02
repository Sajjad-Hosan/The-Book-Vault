import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaFilter } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { TbArrowsRandom } from "react-icons/tb";

const FilterCompo = () => {
  const [filter, setFilter] = useState(50);
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-sm btn-ghost m-1">
          <FaFilter />
        </div>
        <div
          tabIndex={0}
          className="dropdown-content  bg-base-100 rounded-box z-20 w-64 p-5 shadow border"
        >
          <p className="font-mono font-semibold">Filter by price</p>
          <div className="divider"></div>
          <input
            type="range"
            min={0}
            max="1000"
            defaultValue="50"
            onChange={(e) => setFilter(e.target.value)}
            className="range range-xs"
            step="1"
          />
          <div className="flex items-center gap-4 mt-2">
            <p className="text-sm text-gray-500 font-mono">
              Price:
              <span className="">
                <span className="font-semibold text-black">${filter}</span> -
                $1000
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <button
              className="btn btn-sm btn-ghost flex tooltip"
              data-tip="up-down"
            >
              <LuArrowUpDown />
            </button>
            <button
              className="btn btn-sm btn-ghost flex tooltip"
              data-tip="high"
            >
              <FaAngleUp />
            </button>
            <button
              className="btn btn-sm btn-ghost flex tooltip"
              data-tip="low"
            >
              <FaAngleDown />
            </button>
            <button
              className="btn btn-sm btn-ghost flex tooltip"
              data-tip="random"
            >
              <TbArrowsRandom />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCompo;
