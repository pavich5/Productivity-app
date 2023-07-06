import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import Aside from "../../Layouts/Aside/Aside";
import Button from "../../Components/Button/Button";

const DatePickingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [newTask, setNewTask] = useState("");
  const [dateTasks, setDateTasks] = useState({});

  useEffect(() => {
    console.log(dateTasks[selectedDate]);
  }, [selectedDate]);

  const handleDateChange = date => {
    setSelectedDate(date.toDateString());
  };

  const handleAddTask = () => {
    setDateTasks(prevData => {
      const prevTasks = prevData[selectedDate] ? prevData[selectedDate] : [];

      const newTasks = [...prevTasks, newTask];

      return { ...prevData, [selectedDate]: newTasks };
    });

    console.log(dateTasks);
  };

  const handleDeleteTask = index => {
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
            selected={new Date(selectedDate)}
            onChange={handleDateChange}
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day"}
          />
        </div>
        <h2 style={{ margin: 0 }}>Tasks for {selectedDate}</h2>
        <div className="AddTaskContainer">
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <Button
            onBtnClick={handleAddTask}
            btnText="Add Task"
            className="AddTaskButton"
          />
        </div>
        <div className="TasksContainer">
          <ul>
            {dateTasks[selectedDate]?.map((task, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default DatePickingPage;
