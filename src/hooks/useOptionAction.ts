import toast from "react-hot-toast";
import { useAppDispatch } from "../store/hooks";
import { addOption } from "../store/slice/dropDownSlice";
import type { Option } from "../types/option/option.types";

export const useOptionActions = () => {
  const dispatch = useAppDispatch();

  const addNewOption = (option: Omit<Option, "id">) => {
    try {
      toast.success("Option added successfully");
      dispatch(addOption({ ...option, id: Date.now() }));
    } catch (error) {
      toast.error("Failed to add option");
      console.log(error);
    }
  };

  return {
    addNewOption,
  };
};
