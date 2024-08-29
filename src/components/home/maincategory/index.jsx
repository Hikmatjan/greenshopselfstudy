import React from "react";
import Header from "./header";
import Body from "./body";
import CategoryModal from "./modals/category";

const MainCategory = () => {
  return (
    <>
      <CategoryModal />
      <div className="w-full ">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default MainCategory;
