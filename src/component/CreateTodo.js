import React, { useState } from 'react';

export default function CreateTodo(props) {
  const [tasks, setTasks] = useState({
    todoTask: '',
  });

  function handleChange(e) {
    setTasks((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    // when Enter or Button is hit this function will perform
    e.preventDefault();
    props.createTask(tasks.todoTask); // this was recieved from the function in the Main component parent to create new Task
    // the createTask will recieve text from tasks.todoTask input and create it

    setTasks((prev) => {
      // and this is to set the input field back to empty after created new task
      return {
        ...prev,
        todoTask: (prev.todoTask = ''),
      };
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        {' '}
        {/* here is the input field of the creation of new task */}
        <input
          className="create-todo"
          type="text"
          name="todoTask"
          value={tasks.todoTask}
          placeholder="Enter task"
          onChange={handleChange}
          autoFocus
        />
        <button className="add" type="submit">
          {' '}
          {/* here is the add button of newTask */}
          Add
        </button>
      </form>
    </div>
  );
}
