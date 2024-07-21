import { useState, useEffect } from "react";
import CheckboxWrapper from "./Checkbox.style";

const Checkbox = ({ label, checked, color, onChange, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    if (onChange) {
      onChange();
    }
  };

  return (
    <CheckboxWrapper color={color}>
      <label>
        <input
          type="checkbox"
          className={isChecked ? "checked" : ""}
          onChange={handleChange}
          checked={isChecked}
          {...props}
        />
        <span>{label}</span>
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;


//file

//file