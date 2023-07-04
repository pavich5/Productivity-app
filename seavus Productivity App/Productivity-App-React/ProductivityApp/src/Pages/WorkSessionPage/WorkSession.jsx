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
import ResultPopUp from "../../Components/ResultPopUp/ResultPopUp";

const WorkSession = () => {
  const textareaRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  // const [sections, setSections] = useState(initialSections);
  const [sectionName, setSectionName] = useState("Section placeholder");
  const [taskName, setTaskName] = useState("Task name placeholder");
  const [subtasks, setSubtasks] = useState(["a", "as", "a", "as", "a", "as", "a", "as", "a", "as"]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedTask, setSelectedTask] = useState(null);
  const [comments, setComments] = useState([]);
  const [result, setResult] = useState(0);
  const [devident, setDevident] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Retrieve existing sections from local storage
  const storedSections = localStorage.getItem("sections");
  const initialSections = storedSections ? JSON.parse(storedSections) : [];

  const [sections, setSections] = useState(initialSections);

  const handleAddTaskClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newSection = {
      id: generateUniqueId(),
      sectionName,
      tasks: [
        {
          taskName,
          subtasks,
          date,
          percentage,
        },
      ],
    };

    setSections([...sections, newSection]);

    setSectionName("Section placeholder");
    setTaskName("Task name placeholder");
    setSubtasks(["a", "as"]);
    setDate(new Date().toISOString().slice(0, 10));

    setShowForm(false);
    setComments("");
    setResult(0);
    setDevident(0);
    setPercentage(0);
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

  const handleSubtaskChange = (index, e) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = e.target.value;
    setSubtasks(updatedSubtasks);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 string
    const randomNum = Math.random().toString(36).substring(2, 9); // Generate random number and convert to base 36 string
    const uniqueId = timestamp + randomNum; // Combine timestamp and random number

    return uniqueId;
  }

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    const isTaskCompleted = completedTasks.includes(task);

    if (!isTaskCompleted) {
      const updatedCompletedTasks = [...completedTasks, task];
      setCompletedTasks(updatedCompletedTasks);
    }

    const updatedSections = sections.map((section) => {
      if (section.tasks.includes(task)) {
        const updatedSection = {
          ...section,
          sectionName: section.sectionName + "-Completed",
        };
        console.log("updatedSection", updatedSection);

        if (isTaskCompleted) {
          updatedSection.id = generateUniqueId(); // Assign a new unique ID to the section
        }
        console.log("updatedSection id", updatedSection.id);

        return updatedSection;
      }
      return section;
    });

    setSections(updatedSections);
  };

  const handleCommentChange = (index, e) => {
    const updatedComments = [...comments];
    updatedComments[index] = e.target.value;
    setComments(updatedComments);
  };
  // Curried function - straight from chatGPT. I dont get this one - please explain.
  // const handleCommentChange = (index)=> (e) => {
  //   const updatedComments = [...comments];
  //   updatedComments[index] = e.target.value;
  //   setComments(updatedComments);
  // };
  // I had trouble with the e.target in here Uncaught TypeError: Cannot read properties of undefined (reading 'target')
  // at handleCommentChange (WorkSession.jsx:121:32)
  // The error message indicates that the 'target' property is undefined when trying to access it in the handleCommentChange function. This typically occurs when the event object being passed to the function is not structured as expected.

  const handleResultModalClose = () => {
    setShowResultModal(false);
  };

  const [lastItemPercentage, setLastItemPercentage] = useState(null);

  const handleSubmit = () => {
    const sectionPercentage = (result / devident) * 100;
    const updatedSections = sections.map((section) => {
      const updatedTasks = section.tasks.filter((task) => task.taskName !== selectedTask.taskName);
      return { ...section, tasks: updatedTasks };
    });
    console.log("updated sections from handle Submit", updatedSections);
    console.log("the final section from handle Submit", sections);
    console.log("selected task from handle submit", selectedTask);

    setPercentage(sectionPercentage);
    setSections(updatedSections);

    const completedSubtasks = selectedTask.subtasks.map((subtask, index) => {
      return {
        subtask,
        comment: comments[index] || "",
      };
    });

    const completedTask = {
      taskName: selectedTask.taskName,
      date: selectedTask.date,
      subtasks: completedSubtasks,
      percentage: sectionPercentage,
    };

    const storedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    const updatedStoredTasks = [...storedTasks, completedTask];
    localStorage.setItem("completedTasks", JSON.stringify(updatedStoredTasks));
    setLastItemPercentage(updatedStoredTasks[updatedStoredTasks.length - 1].percentage);
    console.log(updatedStoredTasks[updatedStoredTasks.length - 1].percentage);
  };
  console.log("lastitem%", lastItemPercentage);
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
              setShowResultModal={setShowResultModal}
              percentage={percentage}
              lastItemPercentage={lastItemPercentage}
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
  showResultModal={showResultModal} // Ensure this prop is passed correctly
  setShowResultModal={setShowResultModal}
  handleResultModalClose={handleResultModalClose}
  percentage={percentage}
/>

        </div>
      )}

      {showResultModal && <ResultPopUp handleResultModalClose={handleResultModalClose} percentage={percentage} />}
    </div>
  );
};

export default WorkSession;
