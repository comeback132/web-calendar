import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 80px;
  margin: 0 auto;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.30000001192092896px;
  text-align: left;
  position:relative;
  top:-7px;
`;

export const Title = styled("h4")`
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  text-align: left;
  color: #323749;
`;

export const DropDownHeader = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 36px;
  padding: 12px 10px 12px 10px;
  gap: 4px;
  border-radius: 8px;
  opacity: 0px;
  border: 1px solid #dedfe5;
  box-shadow: 0px 1px 2px 0px #1018280d;
  background: #ffffff;
  cursor: pointer;
  &:hover {
    background: #F6F6F6;
    box-shadow: 0px 1px 2px 0px #45454540;
  }
  &:active {
    background: #E3E3E3;
    box-shadow: 0px 1px 2px 0px #45454540;
  }
`;

export const DropDownListContainer = styled("div")`
  margin-top: 3px;
  position: absolute;
`;

export const DropDownList = styled("ul")`
  padding: 0;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dee0e5;
  box-shadow: 0px 8px 16px 0px #3131311a;
  margin: 0;
  max-height: 180px;
  background: #ffffff;
`;

export const ListItem = styled("li")`
  list-style: none;
  height: 36px;
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  &:hover {
    background: #f6f6f6;
  }
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &:active {
    background: #e3e3e3;
  }
`;