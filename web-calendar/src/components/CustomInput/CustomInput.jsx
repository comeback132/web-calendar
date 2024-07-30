import React, { useState } from "react";
import {
  InputWrapper,
  Label,
  InputField,
  ToggleButton,
  ErrorMessage,
} from "./style";
import eyeclosed from "@/assets/Property 1=eye-close-line.png";
import eyeopen from "@/assets/Property 1=eye-line.png";

const CustomInput = ({
  error,
  disabled,
  active,
  filled,
  showPasswordToggle,
  type = "text",
  label,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputField
        role="textbox"
        error={error}
        disabled={disabled}
        active={active}
        filled={filled}
        type={inputType}
        {...rest}
      />
      {showPasswordToggle && type === "password" && (
        <ToggleButton onClick={handleTogglePassword}>
          {showPassword ? (
            <img src={eyeclosed} alt="Close eye icon" />
          ) : (
            <img src={eyeopen} alt="Open eye icon" />
          )}
        </ToggleButton>
      )}
      {error && <ErrorMessage>is required</ErrorMessage>}
    </InputWrapper>
  );
};

export default CustomInput;
