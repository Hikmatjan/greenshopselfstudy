import React from "react";

const Size = () => {
  return (
    <div className="mt-[46px] mb-[7px]">
      <div className="px-[18px] py-[14px]">
        <h3 className="font-bold">Size</h3>
        <div className="flex px-[12px] justify-between cursor-pointer hover:text-[#46A358] items-center">
          <h3>Small</h3>
          <h3>(119)</h3>
        </div>
        <div className="flex px-[12px] justify-between cursor-pointer hover:text-[#46A358] items-center">
          <h3>Medium</h3>
          <h3>(86)</h3>
        </div>
        <div className="flex px-[12px] justify-between cursor-pointer hover:text-[#46A358] items-center">
          <h3>Large</h3>
          <h3>(78)</h3>
        </div>
      </div>
    </div>
  );
};

export default Size;
