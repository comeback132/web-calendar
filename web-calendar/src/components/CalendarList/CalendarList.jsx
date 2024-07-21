import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateCalendarModal from "./CreateCalendarModal";
import EditCalendarModal from "@/components/CalendarList/EditCalendarModel";
import DeleteCalendarModal from "./DeleteCalendarModal";
import {
  addCalendar,
  deleteCalendar,
  editCalendar,
  toggleCalendarSelection,
} from "../../features/calendar/calendarSlice";
import Checkbox from "@/components/CalendarList/Checkbox";
import CustomButton from "@/components/CustomButton/CustomButton";
import {
  Container,
  Header,
  Title,
  EditButton,
  AddButton,
  List,
  ListItem,
  CalendarCheckWrapper,
  CalendarControls,
} from "./CalendarList.style";

const CalendarList = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
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
      selected: true, // Set selected to true by default
    };
    dispatch(addCalendar(newCalendar));
    setShowCreateModal(false);
  };

  const handleEditCalendar = (id, name, color) => {
    console.log("Dispatching editCalendar with", id, name, color);
    const updatedCalendar = { id, name, color };
    dispatch(editCalendar({ calendarId: id, updatedCalendar }));
    setShowEditModal(false);
  };

  const handleDeleteCalendar = (calendarId) => {
    dispatch(deleteCalendar(calendarId));
    setShowDeleteModal(false);
  };

  const handleCheckboxChange = (id) => {
    dispatch(toggleCalendarSelection(id));
  };

  return (
    <Container>
      <Header>
        <Title>My calendars</Title>
        <CustomButton
          icon="add"
          iconOnly
          onClick={() => setShowCreateModal(true)}
        >
          +
        </CustomButton>
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
              <Checkbox
                color={calendar.color}
                checked={calendar.selected}
                onChange={() => handleCheckboxChange(calendar.id)}
              />
              <span>{calendar.name}</span>
            </CalendarCheckWrapper>
            {hoveredCalendarId === calendar.id && (
              <CalendarControls>
                <CustomButton
                  icon="edit"
                  iconOnly
                  onClick={() => {
                    setSelectedCalendar(calendar);
                    setShowEditModal(true);
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

      {showEditModal && selectedCalendar && (
        <EditCalendarModal
          calendar={selectedCalendar}
          onEdit={handleEditCalendar}
          onClose={() => setShowEditModal(false)}
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
