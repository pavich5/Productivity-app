import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";
import "./ActiveTaskPopUp.css";

const ActiveTaskPopUp = (props) => {
  const {
    selectedTask,
    setSelectedTask,
    sections,
    // setSections,
    comments,
    handleCommentChange,
    textareaRef,
    // subtasks,
    result,
    setResult,
    setShowResultModal,
    setDevident,
    devident,
    // percentage,
    // setPercentage,
    handleSubmit,
  } = props;

  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [currentSubtaskIndex, setCurrentSubtaskIndex] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isPopupOpen && inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }
  }, [isPopupOpen]);

  useEffect(() => {
    if (currentSubtaskIndex < inputRefs.current.length) {
      inputRefs.current[currentSubtaskIndex].scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [currentSubtaskIndex]);

  const handleYesButton = (index) => {
    let updatedResult = parseInt(result) + 1;
    let updatedTasksLength = devident + 1;
    setDevident(updatedTasksLength);
    setResult(updatedResult);

    const nextIndex = index + 1;
    setCurrentSubtaskIndex(nextIndex);
    if (nextIndex < selectedTask.subtasks.length) {
      inputRefs.current[nextIndex].disabled = true;
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleNoButton = (index) => {
    let updatedResult = parseInt(result) + 0;
    let updatedTasksLength = devident + 1;
    setDevident(updatedTasksLength);
    setResult(updatedResult);

    const nextIndex = index + 1;
    setCurrentSubtaskIndex(nextIndex);
    if (nextIndex < selectedTask.subtasks.length) {
      inputRefs.current[nextIndex].disabled = true;
      inputRefs.current[nextIndex].focus();
    }
  };

  // const handleSubmit = () => {
  //   const sectionPercentage = (result / devident) * 100;
  //   const updatedSections = sections.map((section) => {
  //     const updatedTasks = section.tasks.filter((task) => task.taskName !== selectedTask.taskName);
  //     return { ...section, tasks: updatedTasks };
  //   });

  //   setPercentage(sectionPercentage);
  //   setSections(updatedSections);
  //   // setSelectedTask(null);
  //   // setShowResultModal(true);
  //   // setIsPopupOpen(false);

  //   const completedSubtasks = selectedTask.subtasks.map((subtask, index) => {
  //     return {
  //       subtask,
  //       comment: comments[index] || "",
  //     };
  //   });

  //   const completedTask = {
  //     taskName: selectedTask.taskName,
  //     date: selectedTask.date,
  //     subtasks: completedSubtasks,
  //     percentage: sectionPercentage,
  //   };

  //   const storedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
  //   const updatedStoredTasks = [...storedTasks, completedTask];
  //   localStorage.setItem("completedTasks", JSON.stringify(updatedStoredTasks));
  //   console.log(updatedStoredTasks[updatedStoredTasks.length - 1].percentage);
  // };
  console.log(JSON.parse(localStorage.getItem("completedTasks")));
  console.log("Popup Result", result);
  console.log("initial task", selectedTask.subtasks);
  console.log("initial sections", sections);
  const handleSubmitStates = () => {
    setSelectedTask(null);
    setShowResultModal(true);
    setIsPopupOpen(false);
  };
  const fullHandleSubmitLogic = () => {
    handleSubmit(), handleSubmitStates();
  };

  return (
    <>
      {isPopupOpen && (
        <div className="popupOverlay">
          <div className="popupContent">
            <h3>{selectedTask.taskName}</h3>
            <p>Date: {selectedTask.date}</p>
            {selectedTask.subtasks.length > 0 && (
              <div className="popupContentDetails">
                <h4>Subtasks:</h4>
                <ul>
                  {selectedTask?.subtasks.map((subtask, index) => (
                    <li
                      key={subtask + index}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      className={index !== currentSubtaskIndex ? "disabled-li" : ""}
                    >
                      <h4>{subtask}</h4>
                      <div>
                        <textarea
                          ref={textareaRef}
                          value={comments[index] || ""}
                          onChange={(e) => handleCommentChange(index)(e)}
                          placeholder="Enter your comment (optional)"
                        ></textarea>
                      </div>
                      <Button
                        onBtnClick={() => handleYesButton(index)}
                        disabled={index !== currentSubtaskIndex}
                        btnStyle={{ backgroundColor: "green" }}
                        btnText="Yes"
                      />
                      <Button
                        onBtnClick={() => handleNoButton(index)}
                        disabled={index !== currentSubtaskIndex}
                        btnStyle={{ backgroundColor: "red" }}
                        btnText="No"
                      />
                    </li>
                  ))}
                </ul>
                {currentSubtaskIndex === selectedTask.subtasks.length && (
                  <Button onBtnClick={fullHandleSubmitLogic} btnText="Submit" btnStyle={{ backgroundColor: "blue" }} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ActiveTaskPopUp;
