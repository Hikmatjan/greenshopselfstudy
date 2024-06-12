import React from "react";
import Categories from "./categories";
import PriceRange from "./pricerange";
import Size from "./size";
import Discount from "./discount";

const SideNav = () => {
  return (
    <div className=" mt-[26px] w-[310px]  bg-[#f5f5f5]">
      <Categories />
      <PriceRange />
      <Size />
      <Discount />
    </div>
  );
};

export default SideNav;
