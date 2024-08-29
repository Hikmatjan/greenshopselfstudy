import React from "react";
import { Skeleton } from "antd";

const Loading = () => {
  return (
    <div className="w-[258px]">
      <div className=" h-[300px]  flex  items-center justify-center w-full bg-[#f5f5f5]">
        {/* <img className="w-fit h-fit" src={main_image} alt="" />
         */}
        <Skeleton.Image />
      </div>
      <Skeleton.Input />
      <Skeleton.Input />
    </div>
  );
};

export default Loading;
