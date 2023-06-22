import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import Aside from '../../Layouts/Aside/Aside';
import './WorkSession.css';

const WorkSession = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddTaskClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    // ...
    setShowForm(false); // Hide the form after submission
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
        <div className="notfiicationBell">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <section>
          <h3>
            <FontAwesomeIcon icon={faCircle} />
            Section 1
          </h3>
          <ul className="taskList">
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 1
            </li>
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 2
            </li>
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 3
            </li>
            <li className="add-task-li" onClick={handleAddTaskClick}>
              + Add Task
            </li>
          </ul>
          <span className="more-details">...</span>
        </section>

        <section>
          <h3>
            <FontAwesomeIcon icon={faCircle} />
            Section 2
          </h3>
          <ul className="taskList">
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 1
            </li>
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 2
            </li>
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 3
            </li>
            <li className="add-task-li" onClick={handleAddTaskClick}>
              + Add Task
            </li>
          </ul>
          <span className="more-details">...</span>
        </section>

        <section>
          <h3>
            <FontAwesomeIcon icon={faCircle} />
            Section 3
          </h3>
          <ul className="taskList">
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 1
              <ul className="subTaskList">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Subtask 1
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Subtask 2
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Subtask 3
                </li>
              </ul>
            </li>
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 2
              <ul className="subTaskList">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Subtask 1
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Subtask 2
                </li>
              </ul>
            </li>
            <li>
              <span className="taskBullet">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              Task 3
              <ul className="subTaskList">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Subtask 1
                </li>
              </ul>
            </li>
            <li className="add-task-li" onClick={handleAddTaskClick}>
              + Add Task
            </li>
          </ul>
          <span className="more-details">...</span>
        </section>
      </div>

      {showForm && (
        <div className="popupContainer">
          <form onSubmit={handleFormSubmit}>
            {/* Add your form inputs and submit button here */}
            {/* ... */}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WorkSession;
