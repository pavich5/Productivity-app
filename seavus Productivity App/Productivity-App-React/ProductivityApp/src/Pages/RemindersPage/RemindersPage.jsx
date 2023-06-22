import React, { useState } from "react";
import Aside from "../../Layouts/Aside/Aside";
import "./RemindersPage.css";

const RemindersPage = () => {
  const [reminderData, setReminderData] = useState([
    { id: 1, title: "Meeting at 10:00 AM" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Call John" },
    { id: 4, title: "Meeting at 10:00 AM" },
    { id: 5, title: "Buy groceries" },
    { id: 6, title: "Call John" },
    { id: 7, title: "Meeting at 10:00 AM" },
    { id: 8, title: "Buy groceries" },
    { id: 9, title: "Call John" },
  ]);

  const handleDeleteReminder = (id) => {
    setReminderData((prevData) =>
      prevData.filter((reminder) => reminder.id !== id)
    );
  };

  const renderReminders = () => {
    return reminderData.map((reminder) => (
      <li key={reminder.id} className="reminder-card">
        <span className="reminder-title">{reminder.title}</span>
        <button
          className="reminder-delete-btn"
          onClick={() => handleDeleteReminder(reminder.id)}
        >
          Complete
        </button>
      </li>
    ));
  };

  return (
    <div className="RemindersMain">
      <Aside style={{ width: "200px" }} />
      <div className="reminders-container">
        <h1>Reminders</h1>
        {reminderData.length === 0 ? (
          <p className="no-reminders-message">No reminders available</p>
        ) : (
          <ul className="reminders-list">{renderReminders()}</ul>
        )}
      </div>
    </div>
  );
};

export default RemindersPage;
