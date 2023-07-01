import React from "react";
import Task from './Task';

function TaskList({tasks, onDelete}) {

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task onDelete={onDelete} key={task.text} text={task.text} category={task.category} />
      ))}
    </div>
  )
}

export default TaskList;