import React, { Children, useState } from "react";
import { DropDownContainer,Title,DropDownHeader,DropDownListContainer,DropDownList,ListItem } from "./style";





const SelectMenu = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <DropDownContainer>
      <Title>{title}</Title>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "12:30 pm"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem data-testid="select-option" onClick={onOptionClicked(option)} key={option}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default SelectMenu;

