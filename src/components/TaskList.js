import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showInconplete,
  setTaskStatus,
  removeTask,
  setIncompleteStatus,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showInconplete ? task.status === false : task))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted task only
        </label>
        <input
          type="checkbox"
          id="filter"
          value={showInconplete}
          onChange={setIncompleteStatus}
        />
      </div>
    </>
  );
}

export default TaskList;
