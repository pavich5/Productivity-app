import Button from "../Button/Button";
import "./ActiveTaskPopUp.css";

const ActiveTaskPopUp = (props) => {
  const { selectedTask, setSelectedTask, sections, setSections, comment, handleCommentChange, textareaRef } = props;

  const handleYesButton = (index) => {
    const updatedSubtasks = selectedTask.subtasks.filter((_, i) => i !== index);
    const updatedTask = { ...selectedTask, subtasks: updatedSubtasks };
    setSelectedTask(updatedTask);
    // TODO Logic for adding score
    // Check if all subtasks are finished
    if (updatedSubtasks.length === 0) {
      const updatedSections = sections.map((section) => {
        const updatedTasks = section.tasks.filter((task) => task.taskName !== selectedTask.taskName);
        return { ...section, tasks: updatedTasks };
      });
      setSections(updatedSections);
      setSelectedTask(null);
    }
  };
  const handleNoButton = (index) => {
    const updatedSubtasks = selectedTask.subtasks.filter((_, i) => i !== index);
    const updatedTask = { ...selectedTask, subtasks: updatedSubtasks };
    setSelectedTask(updatedTask);
    // TODO Logic for subtracting score
    // Check if all subtasks are finished
    if (updatedSubtasks.length === 0) {
      const updatedSections = sections.map((section) => {
        const updatedTasks = section.tasks.filter((task) => task.taskName !== selectedTask.taskName);
        return { ...section, tasks: updatedTasks };
      });
      setSections(updatedSections);
      setSelectedTask(null);
    }
  };

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <h3>{selectedTask.taskName}</h3>
        <p>Date: {selectedTask.date}</p>
        {selectedTask.subtasks.length > 0 && (
          <div>
            <h4>Subtasks:</h4>
            <ul>
              {selectedTask.subtasks.map((subtask, index) => (
                <li key={subtask + index}>
                  {subtask}
                  <div>
                    <textarea ref={textareaRef} value={subtask.comment} onChange={handleCommentChange} placeholder="Enter your comment"></textarea>
                  </div>
                  <div>{textareaRef.current?.value}</div>
                  {console.log(textareaRef.current?.value)}
                  <Button onBtnClick={() => handleYesButton(index)} btnText="Yes" btnStyle={{ backgroundColor: "green" }} />
                  <Button onBtnClick={() => handleNoButton(index)} btnText="No" btnStyle={{ backgroundColor: "red" }} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveTaskPopUp;
