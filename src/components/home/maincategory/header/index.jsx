import { Button, Select } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import React from "react";
import { useSearchParams } from "../../../../hooks/useSearchparams";
import { useDispatch } from "react-redux";
import { setCategoryModal } from "../../../../redux/generic-slices/modals";
import SortSelector from "./sortselector";
const Header = () => {
  const dispatch = useDispatch();
  const { setParams, getParams } = useSearchParams();

  const activeselection =
    " font-bold text-[#46A358] border-b-2 border-[#46A358]";

  const type = getParams("type") ?? "all-plants";

  return (
    <div className="w-full flex justify-between   items-center ">
      <div className=" flex gap-8 cursor-pointer   ">
        <h3
          onClick={() => setParams({ type: "all-plants" })}
          className={` cursor pointer ${
            type === "all-plants" && activeselection
          }`}
        >
          All Plants
        </h3>
        <h3
          onClick={() => setParams({ type: "new-arrivals" })}
          className={` cursor pointer ${
            type === "new-arrivals" && activeselection
          }`}
        >
          New Arrivals
        </h3>
        <h3
          onClick={() => setParams({ type: "Sale" })}
          className={` cursor pointer ${type === "Sale" && activeselection}`}
        >
          Sale
        </h3>
      </div>
      <div className="flex -items-center max-md:hidden gap-2">
        <h3>Sort by:</h3>
        <SortSelector />
      </div>
      <Button
        onClick={() => dispatch(setCategoryModal())}
        className=" flex justify-center items-center hidden max-md:flex "
      >
        <BarsOutlined />
      </Button>
    </div>
  );
};

export default Header;
