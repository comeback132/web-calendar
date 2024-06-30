import styled from "styled-components";

const Container = styled.div`
  width: 220px;
  margin: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #dedfe5;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const EditButton = styled.button`
  background-color: #16af6e;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const AddButton = styled.button`
  background-color: #16af6e;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  color: black;
  &:hover {
    background-color:#F6F7F8;
    border-radius: 8px;
  }
`;
const CalendarCheckWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CalendarControls = styled.div`
  float: right;
  display: flex;
`;

export { Container, Header, Title, EditButton, AddButton, List, ListItem, CalendarCheckWrapper, CalendarControls };