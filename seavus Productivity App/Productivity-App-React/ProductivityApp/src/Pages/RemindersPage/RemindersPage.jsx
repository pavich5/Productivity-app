import Aside from "../../Layouts/Aside/Aside";
import "./RemindersPage.css";

const RemindersPage = () => {
  const reminderData = [
    { id: 1, title: "Meeting at 10:00 AM" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Call John" },
    { id: 4, title: "Meeting at 10:00 AM" },
    { id: 5, title: "Buy groceries" },
    { id: 6, title: "Call John" },
    { id: 1, title: "Meeting at 10:00 AM" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Call John" },
    { id: 4, title: "Meeting at 10:00 AM" },
    { id: 5, title: "Buy groceries" },
    { id: 6, title: "Call John" },
    { id: 1, title: "Meeting at 10:00 AM" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Call John" },
    { id: 4, title: "Meeting at 10:00 AM" },
    { id: 5, title: "Buy groceries" },
    { id: 6, title: "Call John" },
    { id: 1, title: "Meeting at 10:00 AM" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Call John" },
    { id: 4, title: "Meeting at 10:00 AM" },
    { id: 5, title: "Buy groceries" },
    { id: 6, title: "Call John" },
    // Add more reminder items here...
  ];

  const renderReminders = () => {
    return reminderData.map((reminder) => (
      <li key={reminder.id} className="reminder-card">
        <span className="reminder-title">{reminder.title}</span>
        <button className="reminder-delete-btn">Delete</button>
      </li>
    ));
  };

  return (
    <div className="RemindersMain">
      <Aside />
      <div className="reminders-container">
        <h1>Reminders</h1>
        <ul className="reminders-list">{renderReminders()}</ul>
      </div>
    </div>
  );
};

export default RemindersPage;
