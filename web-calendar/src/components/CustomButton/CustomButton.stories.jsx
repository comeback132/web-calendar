import React from "react";
import CustomButton from "./CustomButton";
import play from "../../assets/icon/Property 1=play.png";

export default {
  title: "CustomButton",
  component: CustomButton,
};

export const Primary = () => <CustomButton primary>Button</CustomButton>;

export const Secondary = () => <CustomButton secondary>Button</CustomButton>;

export const WithIcon = () => <CustomButton withIcon>Button</CustomButton>;

export const PrimaryWithIcon = () => (
  <CustomButton primary withIcon>
    <img width="16" height="16" src={play} alt="play--v1" />
    Button
  </CustomButton>
);

export const SecondaryWithIcon = () => (
  <CustomButton secondary withIcon>
    <img
      width="16"
      height="16"
      src="https://img.icons8.com/ios-glyphs/16/play--v1.png"
      alt="play--v1"
    />
    Button
  </CustomButton>
);
export const Disabled = () => (
  <CustomButton disabled>
    Button
  </CustomButton>
);
export const PrimaryDisabled = () => (
  <CustomButton primary disabled>
    Button
  </CustomButton>
);
export const PrimaryDisabledWithIcon = () => (
  <CustomButton primary disabled withIcon>
    <img width="16" height="16" src={play} alt="play--v1" />
    Button
  </CustomButton>
);
export const SecondaryDisabled = () => (
  <CustomButton secondary disabled>
    Button
  </CustomButton>
);
export const SecondaryDisabledWithIcon = () => (
  <CustomButton secondary disabled withIcon>
    <img
      width="16"
      height="16"
      src="https://img.icons8.com/ios-glyphs/16/play--v1.png"
      alt="play--v1"
    />
    Button
  </CustomButton>
);


//file
