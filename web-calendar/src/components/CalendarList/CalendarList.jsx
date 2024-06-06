// src/components/CalendarList/CalendarList.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CreateCalendarModal from "./CreateCalendarModal";
import DeleteCalendarModal from "./DeleteCalendarModal";
import {
  addCalendar,
  deleteCalendar,
} from "../../features/calendar/calendarSlice";
import Checkbox from "@/components/CheckBox/Checkbox";
import CustomButton from "@/components/CustomButton/CustomButton";

const CalendarList = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [hoveredCalendarId, setHoveredCalendarId] = useState(null);

  const calendars = useSelector((state) => state.calendar.calendars);
  const dispatch = useDispatch();

  const handleCreateCalendar = (name, color) => {
    const newCalendar = {
      id: `${calendars.length + 1}`,
      name,
      color,
      events: [],
    };
    dispatch(addCalendar(newCalendar));
    setShowCreateModal(false);
  };

  const handleDeleteCalendar = (calendarId) => {
    dispatch(deleteCalendar(calendarId));
    setShowDeleteModal(false);
  };

  return (
    <Container>
      <Header>
        <Title>My calendars</Title>
        <CustomButton icon="add" iconOnly onClick={() => setShowCreateModal(true)}>+</CustomButton>
      </Header>
      <List>
        {calendars.map((calendar) => (
          <ListItem
            key={calendar.id}
            color={calendar.color}
            onMouseEnter={() => setHoveredCalendarId(calendar.id)}
            onMouseLeave={() => setHoveredCalendarId(null)}
          >
            <CalendarCheckWrapper>
              <Checkbox color={calendar.color} />
              <span>{calendar.name}</span>
            </CalendarCheckWrapper>
            {hoveredCalendarId === calendar.id && (
              <CalendarControls>
                <CustomButton
                  icon="edit"
                  iconOnly
                  onClick={() => {
                    setSelectedCalendar(calendar);
                    setShowCreateModal(true);
                  }}
                ></CustomButton>
                {calendar.name !== "Default Calendar" && (
                  <CustomButton
                    icon="delete"
                    iconOnly
                    onClick={() => {
                      setSelectedCalendar(calendar);
                      setShowDeleteModal(true);
                    }}
                  >
                    X
                  </CustomButton>
                )}
              </CalendarControls>
            )}
          </ListItem>
        ))}
      </List>

      {showCreateModal && (
        <CreateCalendarModal
          onCreate={handleCreateCalendar}
          onClose={() => setShowCreateModal(false)}
        />
      )}

      {showDeleteModal && selectedCalendar && (
        <DeleteCalendarModal
          calendar={selectedCalendar}
          onDelete={() => handleDeleteCalendar(selectedCalendar.id)}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </Container>
  );
};

export default CalendarList;

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
