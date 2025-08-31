import type { Option } from "../../../types/option/option.types";

export interface DropDownProps {
  options: Option[];
  addNewOption: (option: Omit<Option, "id">) => void;
}
