import React, { useState } from 'react';

export default function TodoList(props) {
  const [edit, setEdit] = useState(props.taskMapped.etask); // the taskMapped sent from todo component combine with the etask(what to edit)
  // is recieved here as the element of the edit

  const [isEdit, setIsEdit] = useState(false); // this will be use to set edit function and was set to false

  function setEditing(isEditing) {
    setIsEdit({ isEdit: isEditing }); // set state of isEdit is set to isEditing param ({isedit: isEditing})
  }

  // this is for the edit input field
  function handleChange(e) {
    setEdit((prev) => (prev = e.target.value)); //setting the edit input task
  }

  function handleSubmit(e) {
    // what should happen when Enter or edit button is clicked
    e.preventDefault();
    props.itemEdit(props.id, edit); // here it gonna target the particular id and perform edit function
    setIsEdit((prev) => (prev = false)); // and after edit it will set edit back to false(which is initial value)
  }

  function toggleTask() {
    props.toggleTask(props.id); // this is for the markthrough complete task with target id
  }

  function ItemDeleteText() {
    props.ItemDelete(props.id); // delete item with target id
  }

  return (
    <tr>
      {isEdit /* if isEdit is true show this and perform its function */ ? (
        <>
          <td>
            {/* input field of edit */}
            <form onSubmit={handleSubmit}>
              <input
                value={edit}
                onChange={handleChange}
                autoFocus
                placeholder="Edit your todo"
              />
            </form>
          </td>
          <td>
            {/* save function action button  */}
            <button className="save" onClick={handleSubmit}>
              Save
            </button>
            {/* click on back button will just return the intial value no changes( by return edit back to false) */}
            <button
              className="back"
              onClick={() => {
                setIsEdit((prev) => (prev = false));
              }}
            >
              Back
            </button>
          </td>
        </>
      ) : (
        /* if isEdit is false perform this function ... the intial value of isEdit is false*/
        <>
          <td className="task">
            <input
              readOnly
              type="checkbox"
              /* if taskMapped is completed */
              checked={props.taskMapped.isCompleted}
              onClick={toggleTask}
            />
            <span
              onClick={toggleTask}
              className={
                /* if taskMapped is completed */
                props.taskMapped.isCompleted ? 'completed' : 'not-complete'
              }
            >
              {/* here is the output of the task */}
              {props.taskMapped.etask}
            </span>
          </td>
          <td>
            <button
              className="edit"
              onClick={() => {
                /* edit state will be set to true from false and it action will be perform  */
                setIsEdit((prev) => (prev = true));
              }}
            >
              Edit
            </button>
            <button className="delete" onClick={ItemDeleteText}>
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
}
