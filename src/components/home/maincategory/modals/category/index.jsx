import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setCategoryModal } from "../../../../../redux/generic-slices/modals";
import Categories from "../../../sidenav/categories";
import PriceRange from "../../../sidenav/pricerange";
import SortSelector from "../../header/sortselector";

const CategoryModal = () => {
  const dispatch = useDispatch();
  const { categoryModal } = useSelector(({ modal }) => modal);

  return (
    <div>
      <Modal
        onCancel={() => dispatch(setCategoryModal())}
        open={categoryModal}
        title="Dashboard"
      >
        <Categories />
        <PriceRange />
        <SortSelector />
      </Modal>
    </div>
  );
};

export default CategoryModal;
