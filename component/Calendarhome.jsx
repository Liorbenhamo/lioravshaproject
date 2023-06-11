import React, { useEffect, useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendarhome() {
  const [events, setEvents] = useState([]);
  const loginName = localStorage.getItem("loginName");

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter event name");
    if (eventNamePrompt) {
      const randomColor = generateRandomColor();
      const newEvent = {
        id: generateUniqueId(),
        start,
        end,
        title: eventNamePrompt,
        color: randomColor,
      };

      if (!localStorage.getItem(`${loginName}Events`)) {
        localStorage.setItem(`${loginName}Events`, JSON.stringify([newEvent]));
      } else {
        const storedEvents = JSON.parse(
          localStorage.getItem(`${loginName}Events`)
        );
        storedEvents.push(newEvent);
        localStorage.setItem(
          `${loginName}Events`,
          JSON.stringify(storedEvents)
        );
      }

      setEvents([...events, newEvent]);
    }
  };

  //   const handleEventClick = (info) => {
  //     const confirmDelete = window.confirm(
  //       "Are you sure you want to remove this event?"
  //     );
  //     if (confirmDelete) {
  //       const storedEvents = JSON.parse(
  //         localStorage.getItem(`${loginName}Events`)
  //       );
  //       const updatedEvents = storedEvents.filter(
  //         (event) => event.title !== info.event.title
  //       );
  //       localStorage.setItem(`${loginName}Events`, JSON.stringify(updatedEvents));
  //       setEvents(updatedEvents);
  //     }
  //   };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem(`${loginName}Events`));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);
  return (
    <div>
      <Calendar
      displayEventTime={false}
        select={handleSelect}
        plugins={[dayGridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        headerToolbar={{
          start: "prevYear prev today next nextYear",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        events={events}
        // eventClick={handleEventClick}
        // ref={calendarRef}
        // displayEventTime={false}
      />
    </div>
  );
}

export default Calendarhome;
