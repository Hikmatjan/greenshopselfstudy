import React from "react";
import { Carousel } from "antd";
import Collapse from "./slider1";

const Slide = () => {
  return (
    <div className=" mt-[12px] w-full h-[450px] bg-[#f5f5f5]">
      <Carousel>
        <Collapse />
        <Collapse />
        <Collapse />
      </Carousel>
    </div>
  );
};

export default Slide;
