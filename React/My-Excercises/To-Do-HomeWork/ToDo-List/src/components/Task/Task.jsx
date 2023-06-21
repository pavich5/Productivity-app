import React, { useState } from "react";
import "./Task.css";

function Task(props) {
 const[editing,setEditing] = useState(false)
 const[editedText,setEditedText] = useState(props.index)

const handleInputChange= (e) =>{
  setEditedText(e.target.value)
}
const handleSaveClick = () =>{
  props.updateTask(props.index,editedText);
  setEditing(false);
}
const handleCancelClick = () =>{
  setEditing(false)
}

const handleEditClick = () => {
  setEditing(true)
}
 if(editing){
  return(
    <div className="ListItem">
      <li
      key={props.index + props.inputText}>
        <input type="text" value={editedText} onChange={handleInputChange}/>
        <div className="ButtonContainers">
        <button className="InlineButton" onClick={handleSaveClick}>
              Save
            </button>
            <button className="InlineButton" onClick={handleCancelClick}>
              Cancel
            </button>
        </div>
      </li>
    </div> 
  ) 
 } else {
  return(
    <div className="ListItem">
       <div className="ListItem">
        <li key={props.index + props.inputText}>
          {props.inputText}
          <div className="ButtonContainer">
            <button className="EditButton" onClick={handleEditClick}>
              Edit
            </button>
            <button onClick={() => props.removeTask(props.index)} className="RemoveButton">Remove</button>
          </div>
        </li>
      </div>
    </div>
  )
 }

}

export default Task;
