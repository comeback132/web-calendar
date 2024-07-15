import CheckboxWrapper from "./style";

const Checkbox = ({ label, checked, color, onChange }) => {
  return (
    <CheckboxWrapper color={color}>
      <label>
        <input
          type="checkbox"
          className={checked ? "checked" : ""}
          onChange={onChange}
          checked={checked}
        />
        <span>{label}</span>
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;


//file