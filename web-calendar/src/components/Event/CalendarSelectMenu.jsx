import React, { Children, useState } from "react";
import {
  DropDownContainer,
  Title,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./CalendarSelectMenu.style";
import CalendarCheckbox from "@/components/Event/CalendarCheckbox";
import { CalendarCheckWrapper } from "@/components/CalendarList/CalendarList";

const CalendarSelectMenu = ({ title, options }) => {
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
        {selectedOption ? (
          <CalendarCheckWrapper>
            <CalendarCheckbox color={selectedOption.color} />
            <span>{selectedOption.name}</span>
          </CalendarCheckWrapper>
        ) : (
          <CalendarCheckWrapper>
            <CalendarCheckbox color="#00AE1C" /> {/* Default Calendar color */}
            <span>Default Calendar</span>
          </CalendarCheckWrapper>
        )}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem
                data-testid="select-option"
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                <CalendarCheckWrapper>
                  <CalendarCheckbox color={option.color} />
                  <span>{option.name}</span>
                </CalendarCheckWrapper>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default CalendarSelectMenu;

//file
