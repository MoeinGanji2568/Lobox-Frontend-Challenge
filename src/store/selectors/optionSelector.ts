import type { RootState } from "../index";

export const selectOptions = (state: RootState) => state.dropDown.options;
export const selectOptionsLoading = (state: RootState) =>
  state.dropDown.loading;
export const selectOptionsError = (state: RootState) => state.dropDown.error;
