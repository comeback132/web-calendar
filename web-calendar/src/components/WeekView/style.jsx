import styled from "styled-components";
import rgba from "polished/lib/color/rgba";

export const WeekViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const WeekHeader = styled.div`
  display: flex;
  margin-left: 55px;
  min-height: 150px;
  z-index: 1;
  position: sticky;
  top: 0;
`;

export const WeekBody = styled.div`
  display: flex;
  .hours {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 5px;
  }
`;

export const DayColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
`;

export const DayHeader = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  z-index: 1;
  position: sticky;
  top: 0;
  border-right: 1px solid #ddd;
`;

export const DayName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
  padding: 10px;
  margin: 5px;
  background-color: ${(props) => (props.isToday ? "#DFF5E2" : "transparent")};
  border-radius: 8px;
  height: 60px;
`;

export const DayTitle = styled.div`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.20000000298023224px;
  text-align: center;
`;

export const DateTitle = styled.div`
  font-family: Inter;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
`;
export const AllDayEventWrap = styled.div`
  display: flex;
  flex-direction: column;
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

export const HourSlot = styled.div`
  height: 59px;
  border-top: 1px solid #ddd;
  position: relative;
`;

export const HourLabel = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding-right: 5px;
  color: #666;
`;

export const EventItem = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DayViewEvent = styled.div`
display: flex;
flex-wrap: wrap;
  position: absolute;
  width: 90%;
  left: 5%;
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EventTitle = styled.div`
  font-weight: bold;
`;

export const EventTime = styled.div`
  font-size: 0.9em;
  width: 50px;
`;
