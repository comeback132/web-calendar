import React, { useState } from "react";
import downsmall from "@/assets/Property 1=down-small.png";
import CustomIcon from "@/components/Icon/Icon";
import {
  DropDownContainer,
  Title,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./style";

const options = ["Week", "Day"];

const CustomDropdown = ({ title, onOptionClicked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const handleOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onOptionClicked(value);
  };

  return (
    <DropDownContainer data-testid="dropdown-container">
      <Title>{title}</Title>
      <DropDownHeader role="selected" onClick={toggling} data-testid="dropdown-trigger">
        {selectedOption || "Day"}
        <CustomIcon src={downsmall} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem
                onClick={handleOptionClicked(option)}
                key={option}
                data-testid={`option-${option}`}
              >
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default CustomDropdown;
