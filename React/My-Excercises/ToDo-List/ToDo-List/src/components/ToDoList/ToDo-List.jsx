import React, { useState } from "react";
import "./ToDo-list.css";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editMode, setEditMode] = useState(false);

  const addToDo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const deleteToDo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setEditMode(true);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    const index = updatedTodos.indexOf(editTodo);
    if (index !== -1) {
      updatedTodos[index] = editTodo;
      setTodos(updatedTodos);
    }
    setEditTodo("");
    setEditMode(false);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          id="inputText"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addToDo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {editMode && editTodo === todo ? (
                <>
                  <input
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                  <button className="save-button" onClick={saveEdit}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{todo}</span>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteToDo(todo)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
