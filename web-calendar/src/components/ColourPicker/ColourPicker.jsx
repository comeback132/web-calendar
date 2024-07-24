import React from 'react';
import { ColourPickerWrap, colors, Title, InputWrap, LabelWrap, InputPicker } from './style';

const ColourPicker = ({ title, value, onChange }) => {
  return (
    <ColourPickerWrap>
      <Title>{title}</Title>
      <InputWrap>
        {colors.map((color) => (
          <LabelWrap
            key={color}
            role="checkbox"
            style={{ background: color }}
            onClick={() => onChange(color)}
          >
            <InputPicker
              type="radio"
              name="color"
              value={color}
              checked={value === color}
              onChange={() => onChange(color)}
            />
          </LabelWrap>
        ))}
      </InputWrap>
    </ColourPickerWrap>
  );
};

export default ColourPicker;

