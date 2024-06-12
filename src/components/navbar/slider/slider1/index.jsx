import React from "react";

const Collapse = () => {
  return (
    <div className="flex">
      <div className="w-[60%] mt-[68px] pl-[43px]">
        <h3>WELCOME TO GREENSHOP</h3>
        <h3 className="font-bold leading-[70px] text-[70px]">
          LETS MAKE A BETTER{" "}
          <span className=" leading-10 text-[#46A358] font-bold ">PLANET</span>
        </h3>
        <p className="leading-[24px] mt-4 w-[80%] ">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className=" mt-[44px] text-white rounded-[6px] w-[140px] h-[40px] bg-[#46A358]">
          SHOP NOW
        </button>
      </div>
      <div className=" flex justify-center items-center relative w-[40%]">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="logo"
        />
        <img
          className="bottom-0 left-0 absolute"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
          alt=""
        />
      </div>
    </div>
  );
};

export default Collapse;
