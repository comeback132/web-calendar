import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  margin: 0px;
  padding-bottom: 7px;
  letter-spacing: -0.2px;
  text-align: left;
`;
export const Text = styled.p`
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #323749;
  border-bottom: 1px solid #737373;
  padding-bottom: 16px;
  margin: 0px;
  width: 450px;
`;
export const ColourPickerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0px;
  width: 450px;
`;
export const InputWrap = styled.div`
  width: 230px;
  height: 70px;
  border-radius: 8px;
  border: 1px solid #dedfe5;
  padding: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;
export const InputPicker = styled.input`
  width: 12px;
  height: 12px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  visibility: hidden;
`;
export const LabelWrap = styled.label`
  width: 12px;
  height: 12px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    outline: 1px solid #323749;
  }
`;

export const colors = [
  "#9F2957",
  "#D90056",
  "#E25D33",
  "#DFC45A",
  "#B8C42F",
  "#16AF6E",
  "#429488",
  "#397E49",
  "#439BDF",
  "#4254AF",
  "#6C7AC4",
  "#8332A4",
];
