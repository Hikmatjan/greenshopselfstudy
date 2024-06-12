import React from "react";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  return (
    <div className="mt-[26px] border-b border-bg-[#46A358] flex justify-between items-center  ">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
        alt="Logo"
        className="cursor-pointer"
      />
      <div className="flex gap-12">
        <h3 className=" cursor-pointer relative  before:absolute  before:w-full before:h-1 hover:before:bg-[#46A358] before:bottom-[-28px] before:left-0">
          Home
        </h3>
        <h3 className=" cursor-pointer relative  before:absolute  before:w-full before:h-1 hover:before:bg-[#46A358] before:bottom-[-28px] before:left-0">
          Shop
        </h3>
        <h3 className=" cursor-pointer relative  before:absolute  before:w-full before:h-1 hover:before:bg-[#46A358] before:bottom-[-28px] before:left-0">
          Plant Care
        </h3>
        <h3 className=" cursor-pointer relative  before:absolute  before:w-full before:h-1 hover:before:bg-[#46A358] before:bottom-[-28px] before:left-0">
          Blog
        </h3>
      </div>
      <div className="flex items-center gap-4">
        <SearchOutlined className="cursor-pointer w-[20px] h-[20px]" />
        <ShoppingCartOutlined className="cursor-pointer w-[29px] h-[24px]" />
        <button className=" flex items-center gap-2 justify-center w-[100px] h-[35px] rounded-[6px] bg-[#46A358] text-white">
          <LoginOutlined />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
