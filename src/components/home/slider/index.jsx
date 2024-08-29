import React from "react";
import { Carousel } from "antd";
import Collapse from "./slider1";
import { carousel_mock } from "../../../utils/mock";

const Slide = () => {
  return (
    <div className=" mt-[12px] w-full h-[450px] bg-[#f5f5f5]">
      <Carousel>
        {carousel_mock.map((item) => (
          <Collapse key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
