import styled from "styled-components";

export const DropDownContainer = styled("div")`
  margin-left: 40px;
  position: relative;
  top:-5px;
`;

export const Title = styled("h4")`
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  text-align: left;
  color: #323749;
  position: relative;
  top: 14px;
`;

export const DropDownHeader = styled("div")`
  width: 172px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  border-bottom: 1px solid #323749;
  padding-bottom: 5px;
  padding-top: 8px;
`;

export const DropDownListContainer = styled("div")`
  position: relative;
  top: 3px;
  z-index: 999;
`;

export const DropDownList = styled("ul")`
  padding: 0;
  width: 172px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dee0e5;
  box-shadow: 0px 8px 16px 0px #3131311a;
  margin: 0;
  max-height: 180px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #fff;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    width: 4px;
    border-radius: 3px;
    height: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  height: 36px;
  width: 172px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
