import React from "react";

function AddTaskForm({ newTask, handleSubmit, setChangedInput }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <label htmlFor="newItem">Add to the todo list</label>
      <input
        type="text"
        id="newItem"
        value={newTask}
        onChange={(e) => setChangedInput(e)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTaskForm;
