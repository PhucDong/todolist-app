import React from "react";

function TaskItem({ task, setTaskStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="actions">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={task.status}
          onChange={(e) => setTaskStatus(task.id, e.target.checked)}
        />

        <i
          onClick={() => removeTask(task.id)}
          className="fa-solid fa-xmark btn-action btn-action-delete"
        ></i>
      </div>
    </li>
  );
}

export default TaskItem;
