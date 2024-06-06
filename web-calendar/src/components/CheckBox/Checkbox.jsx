import { useState } from "react";
import CheckboxWrapper from "./style";

const Checkbox = ({ label, checked, color, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <CheckboxWrapper color={color}>
      <label>
        <input type="checkbox" className={isChecked ? "checked" : ""} onChange={() => setIsChecked((prev) => !prev)} checked={isChecked} />
        <span>{label}</span>
      </label>
    </CheckboxWrapper>
  );
};
export default Checkbox;

//file