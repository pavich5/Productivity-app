import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./TaskSectionContainer.css";
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
  const handleSectionClick = (event) => {
    if (event.target.tagName === "H3") {
      setShowResultModal(true);
    }
  };

  return (
    <section
      className="TaskSectionContainer"
      onClick={(event) => handleSectionClick(event)}
    >
      <h3>
        <FontAwesomeIcon icon={faCircle} />
        {id} {sectionName} -{" "}
        {Math.floor(getSectionPercentageFromLocalStorage(id))} %
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
    </section>
  );
};

export default Section;
