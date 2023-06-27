import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Aside from "../../Layouts/Aside/Aside";
import "./WorkSession.css";
import TaskForm from "../../Components/TasksForm/TaskForm";
import Section from "../../Components/TaskSectionContainer/TaskSectionContainer";
import ActiveTaskPopUp from "../../Components/ActiveTaskPopUp/ActiveTaskPopUp";
import Button from "../../Components/Button/Button";
import checklistData from "../../data/checklistSupervisorUtilitiesSanitation.json";

const WorkSession = () => {
  const textareaRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState("sectionplaceholder");
  const [taskName, setTaskName] = useState("tasknameplaceholder");
  const [subtasks, setSubtasks] = useState(["a", "as"]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedTask, setSelectedTask] = useState(null);
  const [comment, setComment] = useState("");
  const [result, setResult] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);

  console.log("ShowResultModal", showResultModal); //WHY THIS CANT BE TRUE
  console.log("selectedTask", selectedTask); //WHY THIS CANT BE TRUE

  useEffect(() => {
    // if (selectedTask && selectedTask.subtasks.length === 0) {
    const subtasksLength = subtasks.length;
    if ((selectedTask && selectedTask.subtasks.length === undefined) === null) {
      console.log("in useEffect", result);
      setPercentage((result / subtasksLength) * 100);
      // const percentage = (result / subtasks.length) * 100;
      console.log("Result Percentage:", percentage);
      // setShowResultModal(true);
      console.log("subtasks", selectedTask?.subtasks.length === undefined); //WHY THIS CANT BE TRUE
      console.log("selectedTask", selectedTask); //WHY THIS CANT BE TRUE
      console.log("both", (selectedTask && selectedTask.subtasks.length === undefined) === null); //WHY THIS CANT BE TRUE
      console.log("ShowResultModal from useEffect", showResultModal); //WHY THIS CANT BE TRUE
    }
  }, [selectedTask, selectedTask?.subtasks.length, result, percentage]);

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

    setSectionName("sectionplaceholder");
    setTaskName("tasknameplaceholder");
    setSubtasks(["a", "as"]);
    setDate(new Date().toISOString().slice(0, 10));

    setShowForm(false);
    setResult(0);
    setShowResultModal(false);
  };

  const handleSectionNameChange = (e) => {
    setSectionName(e.target.value);
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, ""]);
  };

  const handleRemoveSubtask = (index) => {
    setSubtasks((prevState) => prevState.filter((_, i) => i !== index));
  };

  // const handleRemoveSubtask = (index) => {
  // setSubtasks((prevState) => {
  //   const updatedSubtasks = prevState.filter((_, i) => i !== index);
  //   return updatedSubtasks;
  // });
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

    // Check if the task is already completed
    const isTaskCompleted = completedTasks.includes(task);
    if (!isTaskCompleted) {
      const updatedCompletedTasks = [...completedTasks, task];
      setCompletedTasks(updatedCompletedTasks);

      // Update the section name
      const updatedSections = sections.map((section) => {
        if (section.tasks.includes(task)) {
          return {
            ...section,
            sectionName: section.sectionName + "-Completed",
          };
        }
        return section;
      });
      setSections(updatedSections);
    }
  };

  const handleClosePopup = () => {
    setSelectedTask(null);
  };

  const handleCommentChange = (e) => {
    const updatedComment = e.target.value;

    // Update the comment for the selected task
    const updatedTask = {
      ...selectedTask,
      comment: updatedComment,
    };
    console.log(updatedComment);
    console.log(updatedTask);
    // kako ova da odi vo subtask, ne vo task direktno
    // kako da se napravi zavrsenite taskovi da odat vo rezultat
    // da bidat comments Array
    setComment(updatedComment);
    setSelectedTask(updatedTask);
    console.log(comment);
  };

  const handleResultModalClose = () => {
    setShowResultModal(false);
  };

  return (
    <div className="WorkSession">
      <Aside />
      <div className="workSessionContent">
        <div className="Headings">
          <h2>Work Session</h2>
          <Button onBtnClick={handleAddTaskClick} btnText="+ Add Custom Checklist" className="add-task-button" />
          <Button onBtnClick={handleAddTaskClick} btnText="+ Add Predefined Checklist" className="add-task-button" />
        </div>
        <div className="notificationBell">
          <FontAwesomeIcon icon={faBell} />
        </div>

        {sections.length === 0 ? (
          <p>No tasks added. Click the "Add Task" button to get started.</p>
        ) : (
          sections.map((section, sectionIndex) => (
            <Section
              className="taskSections"
              key={sectionIndex}
              sectionName={section.sectionName}
              tasks={section.tasks}
              selectedTask={selectedTask}
              handleTaskClick={handleTaskClick}
            />
          ))
        )}
      </div>

      {showForm && (
        <div className="popupContainer">
          <TaskForm
            handleFormSubmit={handleFormSubmit}
            sectionName={sectionName}
            handleSectionNameChange={handleSectionNameChange}
            taskName={taskName}
            handleTaskNameChange={handleTaskNameChange}
            subtasks={subtasks}
            handleSubtaskChange={handleSubtaskChange}
            date={date}
            handleDateChange={handleDateChange}
            setShowForm={setShowForm}
            handleAddSubtask={handleAddSubtask}
            handleRemoveSubtask={handleRemoveSubtask}
            checklistData={checklistData}
          />
        </div>
      )}

      {selectedTask && (
        <div className="popupContainer">
          <ActiveTaskPopUp
            selectedTask={selectedTask}
            handleClosePopup={handleClosePopup}
            subtasks={subtasks}
            setSelectedTask={setSelectedTask}
            setSections={setSections}
            sections={sections}
            comment={selectedTask.comment}
            handleCommentChange={handleCommentChange}
            textareaRef={textareaRef}
            checklistData={checklistData}
            result={result}
            setResult={setResult}
            showResultModal={showResultModal}
            setShowResultModal={setShowResultModal}
            handleResultModalClose={handleResultModalClose}
            percentage={percentage}
          />
        </div>
      )}
    </div>
  );
};

export default WorkSession;
