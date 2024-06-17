import React, { useState } from "react";
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

const CalendarSelectMenu = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => {
    setSelectedOption(option); // Set selectedOption to the entire selected calendar object
    setIsOpen(false);
    onChange(option.id); // Pass the id of the selected calendar to the parent onChange handler
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
                onClick={() => onOptionClicked(option)}
                key={option.id} // Use option.id as the key for each ListItem
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

