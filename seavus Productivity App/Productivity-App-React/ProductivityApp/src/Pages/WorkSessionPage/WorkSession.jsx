import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import Aside from '../../Layouts/Aside/Aside';
import './WorkSession.css';

const WorkSession = () => {
  const [showForm, setShowForm] = useState(false);
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [subtasks, setSubtasks] = useState(['', '']);
  const [date, setDate] = useState('');
  const [selectedTask, setSelectedTask] = useState(null); // Track the selected task for popup display

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

    // Clear form inputs
    setSectionName('');
    setTaskName('');
    setSubtasks(['', '']);
    setDate('');

    setShowForm(false); // Hide the form after submission
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
          <button className="add-task-button" onClick={handleAddTaskClick}>
            + Add Task
          </button>
        </div>
        <div className="notificationBell">
          <FontAwesomeIcon icon={faBell} />
        </div>

        {sections.length === 0 ? (
          <p>No tasks added. Click the "Add Task" button to get started.</p>
        ) : (
          sections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              <h3>
                <FontAwesomeIcon icon={faCircle} />
                {section.sectionName}
              </h3>
              <ul className="taskList">
                {section.tasks.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    onClick={() => handleTaskClick(task)}
                    className={task === selectedTask ? 'selected' : ''}
                  >
                    <span className="taskBullet">
                      <FontAwesomeIcon icon={faCircle} />
                    </span>
                    {task.taskName}
                    {task.subtasks.length > 0 && (
                      <ul className="subTaskList">
                        {task.subtasks.map((subtask, subtaskIndex) => (
                          <li key={subtaskIndex}>
                            <FontAwesomeIcon icon={faCircle} />
                            {subtask}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="add-task-li" onClick={handleAddTaskClick}>
                  + Add Task
                </li>
              </ul>
              <span className="more-details">...</span>
            </section>
          ))
        )}
      </div>

      {showForm && (
        <div className="popupContainer">
          <form onSubmit={handleFormSubmit} className="forma">
            <div className="form-group">
              <label htmlFor="sectionName">Section Name:</label>
              <input
                type="text"
                id="sectionName"
                value={sectionName}
                onChange={handleSectionNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="taskName">Task Name:</label>
              <input
                type="text"
                id="taskName"
                value={taskName}
                onChange={handleTaskNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Subtasks:</label>
              {subtasks.map((subtask, index) => (
                <input
                  key={index}
                  type="text"
                  value={subtask}
                  onChange={(e) => handleSubtaskChange(index, e)}
                  required
                />
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="formButtons">
            <button type="submit">Submit</button>
            <button onClick={()=> {setShowForm(false)}}>Close</button>

            </div>

          </form>
        </div>
      )}

{selectedTask && (
  <div className="popupContainer">
    <div className="popupContent">
      <h3>{selectedTask.taskName}</h3>
      <p>Date: {selectedTask.date}</p>
      {selectedTask.subtasks.length > 0 && (
        <div>
          <h4>Subtasks:</h4>
          <ul>
            {selectedTask.subtasks.map((subtask, index) => (
              <li key={index}>
                {subtask}
                <button
                  onClick={() => {
                    const updatedSubtasks = selectedTask.subtasks.filter(
                      (_, i) => i !== index
                    );
                    const updatedTask = { ...selectedTask, subtasks: updatedSubtasks };
                    setSelectedTask(updatedTask);

                    // Check if all subtasks are finished
                    if (updatedSubtasks.length === 0) {
                      const updatedSections = sections.map((section) => {
                        const updatedTasks = section.tasks.filter(
                          (task) => task.taskName !== selectedTask.taskName
                        );
                        return { ...section, tasks: updatedTasks };
                      });
                      setSections(updatedSections);
                      setSelectedTask(null);
                    }
                  }}
                  
                >
                  Finish
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
)}



    </div>
  );
};

export default WorkSession;
