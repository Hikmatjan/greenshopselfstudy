import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
    authmodal: false,
  },
  reducers: {
    setCategoryModal: (state, action) => {
      state.categoryModal = !state.categoryModal;
    },
    setAuthModal: (state, action) => {
      state.authmodal = !state.authmodal;
    },
  },
});
export default modal.reducer;
export const { setCategoryModal, setAuthModal } = modal.actions;
