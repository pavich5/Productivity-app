import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import Aside from "../../Layouts/Aside/Aside";
import Button from "../../Components/Button/Button";

const DatePickingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="DatePickingPageContainer">
      <Aside />
      <div className="DatePickingPage">
        <div className="DatePickerContainer">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day"}
          />
        </div>
        <h2 style={{ margin: 0 }}>Tasks for {selectedDate.toDateString()}</h2>
        <div className="AddTaskContainer">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <Button
            onBtnClick={handleAddTask}
            btnText="Add Task"
            className="AddTaskButton"
          />
        </div>
        <div className="TasksContainer">
          {tasks.length === 0 ? (
            <p>No tasks for this date.</p>
          ) : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <span>{task}</span>
                  <Button
                    onBtnClick={() => handleDeleteTask(index)}
                    btnText="X"
                    className="DeleteTaskButton"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatePickingPage;
