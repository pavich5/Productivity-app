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
  const [sectionName, setSectionName] = useState("Section placeholder");
  const [taskName, setTaskName] = useState("Task name placeholder");
  const [subtasks, setSubtasks] = useState([
    "a",
    "as",
    "a",
    "as",
    "a",
    "as",
    "a",
    "as",
    "a",
    "as",
  ]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedTask, setSelectedTask] = useState(null);
  const [comments, setComments] = useState([]);
  const [result, setResult] = useState(0);
  const [devident, setDevident] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [percentage, setPercentage] = useState(0);

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
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substring(2, 9);
    const uniqueId = timestamp + randomNum;
    return uniqueId;
  }

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    // const updatedSections = sections.map((section) => {
    //   if (section.tasks.includes(task)) {
    //     const updatedSection = {
    //       ...section,
    //       sectionName: section.id + "-" + section.sectionName + " - Completed",
    //     };
    //     console.log("updatedSection", updatedSection);

    //     return updatedSection;
    //   }
    //   return section;
    // });

    // setSections(updatedSections);
  };

  const handleCommentChange = (index, e) => {
    const updatedComments = [...comments];
    updatedComments[index] = e.target.value;
    setComments(updatedComments);
  };

  const handleResultModalClose = () => {
    setShowResultModal(false);
  };

  const [lastItemPercentage, setLastItemPercentage] = useState(null);
  console.log(selectedTask);
  const handleSubmit = () => {
    const sectionPercentage = (result / devident) * 100;
    const updatedSections = sections.map((section) => {
      const updatedTasks = section.tasks.filter(
        (task) => task.taskName !== selectedTask.taskName
      );
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
      id: sections[sections.length - 1].id,
    };

    const storedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    const updatedStoredTasks = [...storedTasks, completedTask];
    localStorage.setItem("completedTasks", JSON.stringify(updatedStoredTasks));
    setLastItemPercentage(
      updatedStoredTasks[updatedStoredTasks.length - 1].percentage
    );
    console.log(updatedStoredTasks[updatedStoredTasks.length - 1].percentage);
  };
  console.log("lastitem%", lastItemPercentage);

  const getSectionPercentageFromLocalStorage = (sectionId) => {
    const sections = JSON.parse(localStorage.getItem("completedTasks"));

    // Find the section with the specified ID
    const section = sections.find((s) => s.id === sectionId);

    // Return the percentage property if the section is found
    if (section) {
      return section.percentage;
    }

    // Return a default value (such as 0) if the section is not found
    return 0;
  };

  return (
    <div className="WorkSession">
      <Aside />
      <div className="workSessionContent">
        <div className="Headings">
          <h2>Work Session</h2>
          <div className="ButtonsAdd">
          <Button
            onBtnClick={handleAddTaskClick}
            btnText="+ Add Custom Checklist"
            className="add-task-button"
          />
          <Button
            onBtnClick={handleAddTaskClick}
            btnText="+ Add Predefined Checklist"
            className="add-task-button"
          />
          </div>
         
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
              id={section.id}
              sectionName={section.sectionName}
              tasks={section.tasks}
              selectedTask={selectedTask}
              handleTaskClick={handleTaskClick}
              setShowResultModal={setShowResultModal}
              percentage={section.percentage}
              lastItemPercentage={lastItemPercentage}
              getSectionPercentageFromLocalStorage={
                getSectionPercentageFromLocalStorage
              }
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
            setSelectedTask={setSelectedTask}
            sections={sections}
            setSections={setSections}
            comments={comments}
            handleCommentChange={handleCommentChange}
            textareaRef={textareaRef}
            result={result}
            setResult={setResult}
            setShowResultModal={setShowResultModal}
            devident={devident}
            setDevident={setDevident}
            handleSubmit={handleSubmit}
            checklistData={checklistData}
          />
        </div>
      )}

      {showResultModal &&
        sections.map((section, sectionIndex) => (
          <ResultPopUp
            className="resultPopUp"
            key={sectionIndex}
            id={section.id}
            handleResultModalClose={handleResultModalClose}
            getSectionPercentageFromLocalStorage={
              getSectionPercentageFromLocalStorage
            }
          />
        ))}
    </div>
  );
};

export default WorkSession;
