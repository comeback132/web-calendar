import { useState } from "react";
import CheckboxWrapper from "./CalendarCheckbox.style";

const CalendarCheckbox = ({ label, checked, color, ...props }) => {

  return (
    <CheckboxWrapper color={color}>
      <label>
        <input type="checkbox" className="checked"  />
        <span>{label}</span>
      </label>
    </CheckboxWrapper>
  );
};
export default CalendarCheckbox;

//file