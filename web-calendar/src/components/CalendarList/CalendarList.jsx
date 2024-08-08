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
import Styled from "./CalendarList.style";

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
      selected: true,
    };
    dispatch(addCalendar(newCalendar));
    setShowCreateModal(false);
  };

  const handleEditCalendar = (id, name, color) => {
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
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>My calendars</Styled.Title>
        <CustomButton
          style={{ backgroundColor: "transparent", width: "auto" }}
          icon="add"
          $iconOnly={true}
          onClick={() => setShowCreateModal(true)}
        />
      </Styled.Header>
      <Styled.List>
        {calendars.map((calendar) => (
          <Styled.ListItem
            key={calendar.id}
            color={calendar.color}
            onMouseEnter={() => setHoveredCalendarId(calendar.id)}
            onMouseLeave={() => setHoveredCalendarId(null)}
          >
            <Styled.CalendarCheckWrapper>
              <Checkbox
                color={calendar.color}
                checked={calendar.selected}
                onChange={() => handleCheckboxChange(calendar.id)}
              />
              <span>{calendar.name}</span>
            </Styled.CalendarCheckWrapper>
            {hoveredCalendarId === calendar.id && (
              <Styled.CalendarControls>
                <CustomButton
                  style={{ backgroundColor: "transparent", width: "auto" }}
                  icon="edit"
                  $iconOnly={true}
                  onClick={() => {
                    setSelectedCalendar(calendar);
                    setShowEditModal(true);
                  }}
                />
                {calendar.name !== "Default Calendar" && (
                  <CustomButton
                    style={{ backgroundColor: "transparent", width: "auto" }}
                    icon="delete"
                    $iconOnly={true}
                    onClick={() => {
                      setSelectedCalendar(calendar);
                      setShowDeleteModal(true);
                    }}
                  />
                )}
              </Styled.CalendarControls>
            )}
          </Styled.ListItem>
        ))}
      </Styled.List>

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
    </Styled.Container>
  );
};

export default CalendarList;
