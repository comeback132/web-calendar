import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
`;

export const MonthYearPickerWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;

  select {
    width: 100%;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

export const MonthYearButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;
