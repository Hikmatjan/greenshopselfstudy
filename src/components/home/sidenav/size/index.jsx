import React from "react";
import { useSearchParams } from "../../../../hooks/useSearchparams";
const Size = () => {
  const { getParams, setParams } = useSearchParams();

  const normal_text =
    " w-full flex px-[12px] justify-between cursor-pointer hover:text-[#46A358] items-center";
  const active_text =
    "w-full flex px-[12px] justify-between cursor-pointer text-[#46A358] items-center";

  const selectedSize = getParams("size") ?? "small";

  return (
    <div className="mt-[46px] mb-[7px]">
      <div className="px-[18px] py-[14px]">
        <h3 className="font-bold">Size</h3>
        <div
          onClick={() => setParams({ size: "small" })}
          className={selectedSize === "small" ? active_text : normal_text}
        >
          <h3>Small</h3>
          <h3>(119)</h3>
        </div>
        <div
          onClick={() => setParams({ size: "medium" })}
          className={selectedSize === "medium" ? active_text : normal_text}
        >
          <h3>Medium</h3>
          <h3>(86)</h3>
        </div>
        <div
          onClick={() => setParams({ size: "large" })}
          className={selectedSize === "large" ? active_text : normal_text}
        >
          <h3>Large</h3>
          <h3>(78)</h3>
        </div>
      </div>
    </div>
  );
};

export default Size;
