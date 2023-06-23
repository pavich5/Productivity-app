import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBell } from '@fortawesome/free-regular-svg-icons';
import Aside from '../../Layouts/Aside/Aside';
import './WorkSession.css';
import TaskForm from '../../Components/TasksForm/TaskForm';
import Section from '../../Components/TaskSectionContainer/TaskSectionContainer';
import ActiveTaskPopUp from '../../Components/ActiveTaskPopUp/ActiveTaskPopUp';
import Button from '../../Components/Button/Button';
const WorkSession = () => {
  const [showForm, setShowForm] = useState(false);
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [subtasks, setSubtasks] = useState(['', '']);
  const [date, setDate] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTaskClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newSection = {
      sectionName,
      tasks: [
        {
          taskName,
          subtasks,
          date,
        },
      ],
    };

    setSections([...sections, newSection]);

    setSectionName('');
    setTaskName('');
    setSubtasks(['', '']);
    setDate('');

    setShowForm(false);
  };

  const handleSectionNameChange = (e) => {
    setSectionName(e.target.value);
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubtaskChange = (index, e) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = e.target.value;
    setSubtasks(updatedSubtasks);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleClosePopup = () => {
    setSelectedTask(null);
  };

  return (
    <div className="WorkSession">
      <Aside />
      <div className="workSessionContent">
        <div className="Headings">
          <h2>Work Session</h2>
          <Button onBtnClick={handleAddTaskClick} btnText='+ Add Task' className='add-task-button'/>

        </div>
        <div className="notificationBell">
          <FontAwesomeIcon icon={faBell} />
        </div>

        {sections.length === 0 ? (
          <p>No tasks added. Click the "Add Task" button to get started.</p>
        ) : (
          sections.map((section, sectionIndex) => (
            <Section
              key={sectionIndex}
              sectionName={section.sectionName}
              tasks={section.tasks}
              selectedTask={selectedTask}
              handleTaskClick={handleTaskClick}
            />
          ))
        )}
      </div>

      {showForm && (
        <div className="popupContainer">
          <TaskForm
            handleFormSubmit={handleFormSubmit}
            sectionName={sectionName}
            handleSectionNameChange={handleSectionNameChange}
            taskName={taskName}
            handleTaskNameChange={handleTaskNameChange}
            subtasks={subtasks}
            handleSubtaskChange={handleSubtaskChange}
            date={date}
            handleDateChange={handleDateChange}
            setShowForm={setShowForm}
          />
        </div>
      )}

      {selectedTask && (
        <div className="popupContainer">
          <ActiveTaskPopUp
         selectedTask={selectedTask}
         handleClosePopup={handleClosePopup} 
         subtasks={subtasks}
         setSelectedTask={setSelectedTask}
         setSections={setSections}
         sections={sections}
         />
        </div>
        
      )}
    </div>
  );
};

export default WorkSession;
