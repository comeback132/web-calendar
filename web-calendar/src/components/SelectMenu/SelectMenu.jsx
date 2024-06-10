import React, { Children, useState } from "react";
import { DropDownContainer,Title,DropDownHeader,DropDownListContainer,DropDownList,ListItem } from "./style";
import Checkbox from "@/components/CheckBox/Checkbox";
//const options = ["12:00 pm", "12:15 pm", "12:30 pm", "12:45 pm", "13:00 pm"];

const generateTimeOptions = () => {
  const options = [];
  const startTime = 0;
  const interval = 15;

  for (let i = startTime; i < 24 * 60; i += interval) {
    const hours = Math.floor(i / 60);
    const minutes = i % 60 === 0 ? "0" : i % 60;
    const amOrPm = hours < 12 ? "am" : "pm";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const timeString = `${
      formattedHours < 10 ? "0" + formattedHours : formattedHours
    }:${minutes < 10 ? "0" + minutes : minutes} ${amOrPm}`;
    options.push(timeString);
  }

  return options;
};

const options = generateTimeOptions();

const SelectMenu = ({ title, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
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
              <ListItem data-testid="select-option" onClick={onOptionClicked(option)} key={Math.random()}>
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

//file
