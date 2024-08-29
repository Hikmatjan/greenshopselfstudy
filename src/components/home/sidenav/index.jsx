import React from "react";
import Categories from "./categories";
import PriceRange from "./pricerange";
import Size from "./size";
import Discount from "./discount";

const SideNav = () => {
  return (
    <div className=" w-[310px] px-[18px] py-[14px] max-md:hidden bg-[#f5f5f5]">
      <Categories />
      <PriceRange />
      <Size />
      <Discount />
    </div>
  );
};

export default SideNav;
