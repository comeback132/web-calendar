const parseTime = (time) => {
    if (!time) return { hours: 0, minutes: 0 }; 
    const [timePart, period] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    return { hours, minutes };
};

const getEventStyle = (event) => {
    const { hours: startHours, minutes: startMinutes } = parseTime(
      event.startTime
    );
    const { hours: endHours, minutes: endMinutes } = parseTime(event.endTime);
    const startInMinutes = startMinutes;
    const startTimeMinHours = startHours * 60 + startMinutes;
    const endInMinutes = endHours * 60 + endMinutes;
    const durationInMinutes = endInMinutes - startTimeMinHours;
  
    return {
      top: `${(startInMinutes / 60) * 60}px`,
      height: `${durationInMinutes}px`,
    };
  };

  const getStartOfWeek = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };
  
  const getEndOfWeek = (date) => {
    const startOfWeek = getStartOfWeek(new Date(date));
    return new Date(startOfWeek.setDate(startOfWeek.getDate() + 7));
  };
  
  const formatDate = (date) => {
    const options = { day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  export {parseTime, getEventStyle, getStartOfWeek, getEndOfWeek, formatDate, isToday};