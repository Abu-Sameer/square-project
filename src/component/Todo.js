import React from 'react';
import TodoList from './TodoList';

export default function Todo(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>todo task</th>
          <th>task actions</th>
        </tr>
      </thead>
      <tbody>
        {/* this mapping is to create feild for the incoming task */}
        {props.mapNewTask.map((mapTask, index) => (
          <TodoList
            key={index}
            taskMapped={mapTask} /* this is sent to the todoList component */
            id={index}
            /* all this was recieved from Main and sent to the todoList component directly */
            ItemDelete={props.ItemDelete}
            itemEdit={props.itemEdit}
            toggleTask={props.toggleTask}
          />
        ))}
      </tbody>
    </table>
  );
}
