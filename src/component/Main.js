import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import Todo from './Todo';
import './Todo.css';

const newTask = localStorage.getItem('savedTask')
  ? JSON.parse(localStorage.getItem('savedTask'))
  : [];
export default function Main() {
  const [task, setTask] = useState({ newTask });

  const createNewTask = (etask) => {
    // this function is sent to createTodo component
    if (etask.trim() === '') {
      alert('There is no task to add');
      return;
    }
    newTask.push({ etask, isCompleted: false }); // the .Push here is use send this element inside the empty array of newTask as new task
    setTask({ task: newTask }); // we set the new output of the task state to the element we sent to the newTask array
    localStorage.setItem('savedTask', JSON.stringify(newTask));
  };

  // here we have the toggle function of the complete or incomplete task connect to the checkbox

  function toggleTask(toggleId) {
    const toggleItem = newTask[toggleId]; // here we set the toggleId to be the target array of the newTask
    toggleItem.isCompleted = !toggleItem.isCompleted; // here is were the markthrough active was set toggle from true to false
    setTask({ task: newTask }); // here is the out put of the toggleItem
    localStorage.setItem('savedTask', JSON.stringify(newTask));
  }

  // here we have the edit task button function

  function editItem(editItemId, edit) {
    const editText = newTask[editItemId]; // here we set the editId to be the newTask array
    editText.etask = edit; // here the variable . pushed element to be equal to edit which s the second param
    setTask({ task: newTask });
    localStorage.setItem('savedTask', JSON.stringify(newTask));
  }

  // her we have the delete task button function

  function deleteItem(deleteItemId) {
    newTask.splice(deleteItemId, 1); // the .Splice here is to remove something from the array of newTask.. and with the delId target 1 task element
    setTask({ task: newTask });
    localStorage.setItem('savedTask', JSON.stringify(newTask));
  }

  return (
    <div className="main">
      <h1>Todos Application</h1>
      <div className="content">
        <CreateTodo createTask={createNewTask} />{' '}
        {/* here we call other component  */}
        <br />
        {/* the newTask and other function created is sent to todo component here */}
        <Todo
          mapNewTask={newTask}
          ItemDelete={deleteItem}
          itemEdit={editItem}
          toggleTask={toggleTask}
        />{' '}
        {/*} and this is the second component*/}
      </div>
    </div>
  );
}
