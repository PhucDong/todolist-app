import React, { useState } from "react";
import "./components/Header.js";
import "./App.css";
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [taskId, setTaskId] = useState(0);

  const [newTask, setNewTask] = useState("");

  const [showInconplete, setShowIncomplete] = useState(false);

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  };

  const setChangedInput = (e) => {
    setNewTask(e.target.value);
  };

  const setIncompleteStatus = (e) => {
    setShowIncomplete(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask) {
      setTaskId(taskId + 1);
      const task = {
        id: taskId,
        title: newTask,
        status: false,
      };

      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <section>
      <div className="container">
        <Header
          title="Todo List"
          subTitle="Get things done, one item at a time."
        />

        <TaskList
          tasks={tasks}
          showInconplete={showInconplete}
          setTaskStatus={setTaskStatus}
          removeTask={removeTask}
          setIncompleteStatus={setIncompleteStatus}
        />

        <AddTaskForm
          newTask={newTask}
          handleSubmit={handleSubmit}
          setChangedInput={setChangedInput}
        />
      </div>
    </section>
  );
}
