import React from "react";
import { TextAreaWrap, Title, Text } from "./style";

const TextArea = ({ title, children }) => {
  return (
    <TextAreaWrap>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </TextAreaWrap>
  );
};

export default TextArea;


//file