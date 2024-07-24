import React from "react";
import { TextAreaWrap, Title, Text } from "./style";

const TextArea = ({ title, children }) => {
  return (
    <TextAreaWrap>
      <Title>{title}</Title>
      <Text placeholder={children} />
    </TextAreaWrap>
  );
};

export default TextArea;
