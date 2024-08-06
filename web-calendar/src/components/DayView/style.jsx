import styled from "styled-components";
import rgba from "polished/lib/color/rgba";

export const DayViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  padding-bottom: 10px;
  margin: 5px;
  z-index: 1;
  position: sticky;
  top: 0;
`;

export const TodayDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dff5e2;
  width: 100%;
  border-radius: 8px;
  height: 60px;
  margin-bottom: 5px;
`;

export const AllDayEventWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
`;

export const AllDayEvent = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  border-radius: 4px;
  margin-bottom: 5px;
  border-left: 6px solid ${(props) => props.color};
  background-color: ${(props) =>
    rgba(props.color, 0.3)}; /* Adjust opacity here */
`;

export const DayViewBody = styled.div`
  position: relative;
  
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
  display:flex;
  position:relative;
`;

export const DayViewEvent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  color: black;
  width: 95%;
  border-radius: 4px;
  z-index: 1;
  border-left: 6px solid ${(props) => props.color};
  background-color: ${(props) =>
    rgba(props.color, 0.3)}; /* Adjust opacity here */
`;
export const EventTitle = styled.div`
  padding-left: 12px;
  font-size: calc(0.6vw + 0.6vh);
`;
export const EventTime = styled.div`
  padding-left: 12px;
  font-size: calc(0.5vw + 0.5vh);
`;
