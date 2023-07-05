import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./TaskSectionContainer.css";
import SmallResultPopUp from "../SmallResultPopup/SmallResultPopUp";
import { useState } from "react";
const Section = ({ id, sectionName, tasks, selectedTask, handleTaskClick, percentage }) => {
  const [smallResultModal, setSmallResultModal] = useState(false);
  const handleSectionClick = (event) => {
    if (event.target.tagName === "H3" && event.target.innerText.slice(0, 15) === id) {
      setSmallResultModal(true);
    }
  };
  const handleSMallResultModalClose = () => {
    setSmallResultModal(false);
  };
  return (
    <section className="TaskSectionContainer" onClick={handleSectionClick}>
      <h3>
        <FontAwesomeIcon icon={faCircle} />
        <span className="selectedText">{id} </span> {sectionName} - {isNaN(percentage) ? 0 : Math.floor(percentage)} %
      </h3>
      <ul className="taskList">
        {tasks.map((task, taskIndex) => (
          <li key={taskIndex} onClick={() => handleTaskClick(task)} className={task === selectedTask ? "selected" : ""}>
            <span className="taskBullet">
              <FontAwesomeIcon icon={faCircle} />
            </span>
            {task.taskName}
            {task.subtasks?.length > 0 && (
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
      </ul>
      {smallResultModal && <SmallResultPopUp handleResultModalClose={handleSMallResultModalClose} percentage={percentage} />}
    </section>
  );
};

export default Section;
