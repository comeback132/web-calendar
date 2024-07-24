import React, { useState } from "react";
import Styled from "./CalendarSelectMenu.style";
import CalendarCheckbox from "@/components/Event/CalendarCheckbox";
import StyledList  from "@/components/CalendarList/CalendarList.style.jsx";

const CalendarSelectMenu = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => {
    setSelectedOption(option); 
    setIsOpen(false);
    onChange(option.id);
  };

  return (
    <Styled.DropDownContainer>
      <Styled.Title>{title}</Styled.Title>
      <Styled.DropDownHeader onClick={toggling}>
        {selectedOption ? (
          <StyledList.CalendarCheckWrapper>
            <CalendarCheckbox color={selectedOption.color} />
            <span>{selectedOption.name}</span>
          </StyledList.CalendarCheckWrapper>
        ) : (
          <StyledList.CalendarCheckWrapper>
            <CalendarCheckbox color="#00AE1C" /> {/* Default Calendar color */}
            <span>Default Calendar</span>
          </StyledList.CalendarCheckWrapper>
        )}
      </Styled.DropDownHeader>
      {isOpen && (
        <Styled.DropDownListContainer>
          <Styled.DropDownList>
            {options.map((option) => (
              <Styled.ListItem
                data-testid="select-option"
                onClick={() => onOptionClicked(option)}
                key={option.id} // Use option.id as the key for each ListItem
              >
                <StyledList.CalendarCheckWrapper>
                  <CalendarCheckbox color={option.color} />
                  <span>{option.name}</span>
                </StyledList.CalendarCheckWrapper>
              </Styled.ListItem>
            ))}
          </Styled.DropDownList>
        </Styled.DropDownListContainer>
      )}
    </Styled.DropDownContainer>
  );
};

export default CalendarSelectMenu;

