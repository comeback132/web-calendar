import styled from "styled-components";

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
  display: flex;
  align-items: flex-start;
  flex: 1;
  text-align: center;

  border-right: 1px solid #ddd;
`;

export const DayName = styled.div`
  display: flex;
  flex-direction: column;
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

export const HourSlot = styled.div`
  height: 60px;
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
`;
