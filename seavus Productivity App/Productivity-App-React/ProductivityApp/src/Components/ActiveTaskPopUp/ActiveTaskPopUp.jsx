import React from 'react'

const ActiveTaskPopUp = (props) => {
      const { selectedTask, setSelectedTask, sections, setSections } = props;

  return (
    <div className="popupContent">
    <h3>{selectedTask.taskName}</h3>
    <p>Date: {selectedTask.date}</p>
    {selectedTask.subtasks.length > 0 && (
      <div>
        <h4>Subtasks:</h4>
        <ul>
          {selectedTask.subtasks.map((subtask, index) => (
            <li key={index}>
              {subtask}
              <button
                onClick={() => {
                  const updatedSubtasks = selectedTask.subtasks.filter(
                    (_, i) => i !== index
                  );
                  const updatedTask = { ...selectedTask, subtasks: updatedSubtasks };
                  setSelectedTask(updatedTask);

                  // Check if all subtasks are finished
                  if (updatedSubtasks.length === 0) {
                    const updatedSections = sections.map((section) => {
                      const updatedTasks = section.tasks.filter(
                        (task) => task.taskName !== selectedTask.taskName
                      );
                      return { ...section, tasks: updatedTasks };
                    });
                    setSections(updatedSections);
                    setSelectedTask(null);
                  }
                }}
                
              >
                Finish
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}

export default ActiveTaskPopUp