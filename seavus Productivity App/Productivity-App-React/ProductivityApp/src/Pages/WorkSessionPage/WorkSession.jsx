import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import Aside from '../../Layouts/Aside/Aside';
import './WorkSession.css';

const WorkSession = () => {
  return (
    <div className="WorkSession">
      <Aside />
      <div className="workSessionContent">
        <h2 style={{ display: 'inline', marginLeft: 32 }}>Work Session</h2>
        <button className="add-task-button">Add Task +</button>

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
            <li className="add-task-li">+ AddTask</li>
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
                <FontAwesomeIcon icon={faCircle}/>
              </span>
              Task 3
            </li>
            <li className="add-task-li">+AddTask</li>
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
            <li className="add-task-li">+AddTask</li>
          </ul>
          <span className="more-details">...</span>
        </section>
      </div>
    </div>
  );
};

export default WorkSession;
