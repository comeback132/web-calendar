import styled, { css } from "styled-components";


export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom:0px;
  flex-direction: column;
  width:100%;
`;

export const InputField = styled.input`
  padding-bottom: 5px;
  padding-top: 15px;
  gap: 0px;
  border: none;
  border-bottom: 1px solid #323749;
  opacity: 0px;
  color: #323749;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.error &&
    css`
      border-color: #ff5620;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background: transparent;
      cursor: not-allowed;
      color: #737373;
      border-bottom: 1px solid #737373;
    `}

  ${(props) =>
    props.active &&
    css`
      border-bottom: 1px solid #323749;
    `}

  ${(props) =>
    props.filled &&
    css`
      background: transparent;
    `}
`;

export const Label = styled.label`
  position: absolute;
  top: -3px;
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: ${props => props.disabled ? '#737373' : '#000'};
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 16px;
  left: 280px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: #ff5620;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
`;

//file