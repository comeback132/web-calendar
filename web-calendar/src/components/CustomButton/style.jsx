import styled, { css } from "styled-components";

const Button = styled.button`
  height: 36px;
  width: 60px;
  color: #ffffff;
  background: #00ae1c;
  font-size: 15px;
  padding: 12px, 10px, 12px, 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin: 0;
  }
  p {
    height: 16px;
  }

  ${(props) =>
    props.primary &&
    css`
      height:36px;
      width:240px;
      background: #00AE1C;
      box-shadow: 0px 1px 2px 0px #1018280D;
      margin:20px; 
      &:hover{
        outline: 1px solid #5CE171;
        box-shadow: 0px 2px 2px 0px #5CE17140;
      }
      &:active{
        background: #0CD52B;
        border: 1px solid #5CE171
        box-shadow: 0px 2px 2px 0px #5CE17140;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background:transparent;
      border:1px solid #DEDFE5;
      height:36px;
      width:36px;
      color:#323749;
      box-shadow: 0px 1px 2px 0px #1018280D;
      &:hover{
        background-color:#EFEFEF;
        box-shadow: 0px 1px 2px 0px #45454540;
      }
      &:active{
        background: #E0E0E0;
        border: 1px solid #DEDFE5
        box-shadow: 0px 1px 2px 0px #45454540;
      }
    `}

   ${(props) =>
    props.withIcon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
    ${(props) =>
    props.iconOnly &&
    css`
      background-color: transparent;
      border: none;
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  
    ${(props) =>
    props.disabled &&
    css`
      filter: brightness(50%);
      cursor: not-allowed;
    `}
`;

export default Button;

//file
