import styled from "styled-components";
import rgba from "polished/lib/color/rgba";

export const DayViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex-grow: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DayViewHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  padding: 10px;
  margin: 5px;
  background-color:#DFF5E2;
  border-radius: 8px;
  height: 60px;
`;

export const DayViewBody = styled.div`
  position: relative;
  overflow: hidden;
`;

export const DayViewHour = styled.div`
  display: flex;
  min-height: 59px;
  position: relative;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #dedfe5;
  }
`;

export const HourLabel = styled.div`
  width: 60px;
  height: 59px;
  text-align: center;
  border-right: 1px solid #dedfe5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HourEvents = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const DayViewEvent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  color: black;
  z-index: 2;
  width: 100%;
  border-radius: 4px;
  border-left: 6px solid ${(props) => props.color};
  background-color: ${(props) =>
    rgba(props.color, 0.3)}; /* Adjust opacity here */
`;
export const EventTitle = styled.div`
  padding-left: 12px;
`;
export const EventTime = styled.div`
  padding-left: 12px;
`;
