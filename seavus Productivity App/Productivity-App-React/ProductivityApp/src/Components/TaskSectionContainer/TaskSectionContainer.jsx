import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
const Section = ({ sectionName, tasks, selectedTask, handleTaskClick, setShowResultModal }) => {
  const handleSectionClick = (event) => {
    if (event.target.tagName === "H3") {
      setShowResultModal(true);
    }
  };
  return (
    <section onClick={handleSectionClick}>
      <h3>
        <FontAwesomeIcon icon={faCircle} />
        {sectionName}
      </h3>
      <ul className="taskList">
        {tasks.map((task, taskIndex) => (
          <li key={taskIndex} onClick={() => handleTaskClick(task)} className={task === selectedTask ? "selected" : ""}>
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
      </ul>
    </section>
  );
};

export default Section;
