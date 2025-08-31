import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Option } from "../../types/option/option.types";

interface DropDownState {
  options: Option[];
  loading: boolean;
  error: string | null;
}

const initialState: DropDownState = {
  options: [
    { id: 1, name: "Education" },
    { id: 2, name: "Sports" },
    { id: 3, name: "Games" },
  ],
  loading: false,
  error: null,
};

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<Option[]>) => {
      state.options = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addOption: (state, action: PayloadAction<Option>) => {
      state.options.push(action.payload);
    },
  },
});

export const { setOptions, setLoading, setError, addOption } =
  dropDownSlice.actions;

export default dropDownSlice.reducer;
