import React from "react";
import { ColourPickerWrap, colors, Title, InputWrap,LabelWrap,InputPicker } from "./style";



const ColourPicker = ({ title }) => {
  return (
    <ColourPickerWrap>
      <Title>{title}</Title>
      <InputWrap>
        {colors.map((color) => (
          <LabelWrap role="checkbox" style={{ background: color }}>
            <InputPicker  key={color} type={"color"} defaultValue={color} />
          </LabelWrap>
        ))}
      </InputWrap>
    </ColourPickerWrap>
  );
};

export default ColourPicker;

//file
