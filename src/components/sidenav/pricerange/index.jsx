import React, { useState } from "react";
import { Slider } from "antd";

const PriceRange = () => {
  const [range, setRange] = useState([0, 1500]);
  return (
    <div>
      <h3 className="font-bold pl-[18px]">Price Range</h3>
      <div className="pl-[30px]">
        <Slider value={range} onChange={setRange} min={0} max={1500} range />
        Price:{" "}
        <span className="font-bold text-[#46A358]">
          ${range[0]}-${range[1]}
        </span>
        <button className=" flex mt-[16px] items-center gap-2 justify-center w-[90px] h-[35px] rounded-[6px] bg-[#46A358] text-white">
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
