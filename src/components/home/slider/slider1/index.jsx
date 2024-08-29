import React from "react";

const Collapse = ({
  title,
  subTitle,
  description,
  buttonText,
  bigImage,
  smallImage,
}) => {
  return (
    <div className="flex">
      <div className="w-[60%] mt-[68px] pl-[43px]">
        <h3>{subTitle}</h3>
        <h3 className="font-bold leading-[70px] text-[70px]">
          {title}
          <span className=" leading-10 text-[#46A358] font-bold "> PLANET</span>
        </h3>
        <p className="leading-[24px] mt-4 w-[80%] ">{description}</p>
        <button className=" mt-[44px] text-white rounded-[6px] w-[140px] h-[40px] bg-[#46A358]">
          {buttonText}
        </button>
      </div>
      <div className=" flex justify-center items-center relative w-[40%]">
        <img src={bigImage} alt="logo" />
        <img className="bottom-0 left-0 absolute" src={smallImage} alt="" />
      </div>
    </div>
  );
};

export default Collapse;
