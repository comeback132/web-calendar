import styled from "styled-components";

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 12px;
  padding: 0px;
  width: 240px;
  max-height: 284px;
  border-radius: 8px;
  position: relative;
  top: 20px;
  .date-picker-container {
    position: relative;
    top: 13px;
    z-index: 0; /* Adjust as necessary */
  }
  .react-datepicker {
    width: 224px;
    height: 217px;
    border: none;
    border-radius: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    position: absolute;
    background: none;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
    color: #ff0000;
  }

  .react-datepicker__navigation--previous {
    left: 170px;
    filter: brightness(0%);
  }

  .react-datepicker__navigation--next {
    right: -8px;
    filter: brightness(0%);
  }

  .react-datepicker__header {
    width: 224px;
    height: 22px;
    background: transparent;
    border: none;
    margin-bottom: 16px;
  }

  .react-datepicker__current-month {
    text-align: start;
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.30000001192092896px;
  }

  .react-datepicker__month {
    margin: 0 auto;
    padding: 0px;
  }
  .react-datepicker__month-container {
    padding: 8px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.30000001192092896px;
    text-align: center;
  }

  .react-datepicker__day-name {
    width: 24px;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0px;
  }

  .react-datepicker__day {
    font-family: Inter;
    font-size: 12px;
    width: 24px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.30000001192092896px;
    text-align: center;
  }

  .react-datepicker__month .react-datepicker__day--outside-month {
    color: #d3d3d3;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected {
    background-color: #00ae1c;
    border-radius: 8px;
  }
`;
