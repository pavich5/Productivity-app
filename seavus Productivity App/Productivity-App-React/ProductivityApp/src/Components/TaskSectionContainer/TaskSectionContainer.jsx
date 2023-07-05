import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./TaskSectionContainer.css";
<<<<<<< Updated upstream
const Section = ({
  id,
  sectionName,
  tasks,
  selectedTask,
  handleTaskClick,
  setShowResultModal,
  percentage,
  lastItemPercentage,
  getSectionPercentageFromLocalStorage,
}) => {
=======
import SmallResultPopUp from "../SmallResultPopup/SmallResultPopUp";
import { useState } from "react";
const Section = ({ id, sectionName, tasks, selectedTask, handleTaskClick, setShowResultModal, percentage, handleResultModalClose }) => {
  const [smallResultModal, setSmallResultModal] = useState(false);
>>>>>>> Stashed changes
  const handleSectionClick = (event) => {
    if (event.target.tagName === "H3" && event.target.innerText.slice(0, 15) === id) {
      setSmallResultModal(true);
    }
  };
<<<<<<< Updated upstream

=======
  const handleSMallResultModalClose = () => {
    setSmallResultModal(false);
  };
>>>>>>> Stashed changes
  return (
    <section
      className="TaskSectionContainer"
      onClick={(event) => handleSectionClick(event)}
    >
      <h3>
        <FontAwesomeIcon icon={faCircle} />
<<<<<<< Updated upstream
        {id} {sectionName} -{" "}
        {Math.floor(getSectionPercentageFromLocalStorage(id))} %
=======
        {id} {sectionName} - {percentage} %
>>>>>>> Stashed changes
      </h3>
      <ul className="taskList">
        {tasks.map((task, taskIndex) => (
          <li
            key={taskIndex}
            onClick={() => handleTaskClick(task)}
            className={task === selectedTask ? "selected" : ""}
          >
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
