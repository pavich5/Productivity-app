import Button from "../Button/Button";
import "./ActiveTaskPopUp.css";

const ActiveTaskPopUp = (props) => {
  const {
    selectedTask,
    setSelectedTask,
    sections,
    setSections,
    comment,
    handleCommentChange,
    textareaRef,
    subtasks,
    result,
    setResult,
    showResultModal,
    setShowResultModal,
    handleResultModalClose,
    percentage,
  } = props;

  const handleYesButton = (index) => {
    const updatedSubtasks = selectedTask.subtasks.filter((_, i) => i !== index);
    const updatedTask = { ...selectedTask, subtasks: updatedSubtasks };
    let updatedResult = result + 1;
    console.log(updatedResult);

    setSelectedTask(updatedTask);
    setResult(updatedResult);

    if (updatedSubtasks.length === 0) {
      const updatedSections = sections.map((section) => {
        const updatedTasks = section.tasks.filter((task) => task.taskName !== selectedTask.taskName);
        setShowResultModal(true);
        return { ...section, tasks: updatedTasks };
      });
      setSections(updatedSections);
      setSelectedTask(null);
    }
  };

  const handleNoButton = (index) => {
    const updatedSubtasks = selectedTask.subtasks.filter((_, i) => i !== index);
    const updatedTask = { ...selectedTask, subtasks: updatedSubtasks };
    let updatedResult = result + 0;
    setResult(updatedResult);
    setSelectedTask(updatedTask);

    if (updatedSubtasks.length === 0) {
      const updatedSections = sections.map((section) => {
        const updatedTasks = section.tasks.filter((task) => task.taskName !== selectedTask.taskName);
        setShowResultModal(true);

        // console.log(updatedTasks);
        console.log(section.tasks);
        return { ...section, tasks: updatedTasks };
      });
      setSections(updatedSections);
      setSelectedTask(null);
    }
  };

  console.log(result);

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
                  <h4>{subtask}</h4>
                  <div>
                    <textarea ref={textareaRef} value={subtask.comment} onChange={handleCommentChange} placeholder="Enter your comment"></textarea>
                  </div>
                  <div>{textareaRef.current?.value}</div>
                  <Button onBtnClick={() => handleYesButton(index)} btnText="Yes" btnStyle={{ backgroundColor: "green" }} />
                  <Button onBtnClick={() => handleNoButton(index)} btnText="No" btnStyle={{ backgroundColor: "red" }} />
                </li>
              ))}
            </ul>
            <div>
              <h3>Result</h3>
              <p>{result}%</p>
            </div>
          </div>
        )}
      </div>
      {showResultModal && (
        <div className="resultModalOverlay">
          <div className="resultModalContent">
            <h3>Result</h3>
            <p>{percentage}%</p>
            <Button onBtnClick={handleResultModalClose} btnText="Close" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveTaskPopUp;
