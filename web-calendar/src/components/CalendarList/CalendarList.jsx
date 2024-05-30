import React, { useState } from 'react';
import styled from 'styled-components';
import CreateCalendarModal from './CreateCalendarModal';
import DeleteCalendarModal from './DeleteCalendarModal';

const CalendarList = () => {
  const [calendars, setCalendars] = useState([{ id: 1, title: 'Default Calendar', color: '#16AF6E' }]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState(null);

  const handleCreateCalendar = (title, color) => {
    const newCalendar = {
      id: calendars.length + 1,
      title,
      color,
    };
    setCalendars([...calendars, newCalendar]);
    setShowCreateModal(false);
  };

  const handleDeleteCalendar = (calendarId) => {
    setCalendars(calendars.filter(calendar => calendar.id !== calendarId));
    setShowDeleteModal(false);
  };

  return (
    <Container>
      <Header>
        <Title>My calendars</Title>
        <AddButton onClick={() => setShowCreateModal(true)}>+</AddButton>
      </Header>
      <List>
        {calendars.map(calendar => (
          <ListItem key={calendar.id} color={calendar.color}>
            <span>{calendar.title}</span>
            {calendar.title !== 'Default Calendar' && (
              <DeleteButton onClick={() => { setSelectedCalendar(calendar); setShowDeleteModal(true); }}>X</DeleteButton>
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
  background-color: ${({ color }) => color};
  border-radius: 4px;
  color: #fff;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;
