import "./DropDown.scss";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import type { DropDownProps } from "./DropDown.types";
import type { Option } from "../../../types/option/option.types";

export const DropDown = ({ options, addNewOption }: DropDownProps) => {
  const { register, handleSubmit, reset } = useForm<{ option: string }>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const ref = useOutsideClick(handler, true);

  function handler() {
    setIsOpen(false);
  }

  const onSubmit = (data: { option: string }) => {
    addNewOption({ name: data.option });
    reset();
    setSearch("");
  };

  const handleSearchResult = () => {
    return options.filter((option) =>
      option?.name.toLowerCase().includes(search?.toLowerCase())
    );
  };

  const handleSelect = (option: Option) => {
    setSearch(option.name);
    setSelectedOption(option);
  };
  return (
    <div className="drop-down" ref={ref}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="drop-down-input-container"
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            type="text"
            placeholder="Type something to add & search..."
            className="drop-down-input"
            {...register("option", {
              required: true,
              onChange: (e) => setSearch(e.target.value),
            })}
            value={search}
          />
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </form>
      <div className={`drop-down-options ${isOpen ? "open" : ""}`}>
        {handleSearchResult()?.length > 0 ? (
          handleSearchResult()?.map((option) => (
            <div
              className={`drop-down-option ${
                selectedOption?.id === option?.id ? "selected" : ""
              }`}
              key={option?.id}
              onClick={() => handleSelect(option)}
            >
              {option?.name}
            </div>
          ))
        ) : (
          <div className="drop-down-option">No options found</div>
        )}
      </div>
    </div>
  );
};
