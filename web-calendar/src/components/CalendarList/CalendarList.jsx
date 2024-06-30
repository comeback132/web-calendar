import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateCalendarModal from "./CreateCalendarModal";
import DeleteCalendarModal from "./DeleteCalendarModal";
import {
  addCalendar,
  deleteCalendar,
} from "../../features/calendar/calendarSlice";
import Checkbox from "@/components/CheckBox/Checkbox";
import CustomButton from "@/components/CustomButton/CustomButton";
import { Container, Header, Title, EditButton, AddButton, List, ListItem, CalendarCheckWrapper, CalendarControls } from "./CalendarList.style";

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

