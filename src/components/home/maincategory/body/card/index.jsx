import React from "react";

const Card = ({ title, price, main_image }) => {
  return (
    <div className="w-[258px]">
      <div className=" h-[300px] w-full bg-[#f5f5f5]">
        <img className="w-fit h-fit" src={main_image} alt="" />
      </div>
      <h3>{title}</h3>
      <p className="text-[#46A358]">${price}</p>
    </div>
  );
};

export default Card;
