import React, { useState } from "react";
import { Box } from "@mui/material";
import AddTask from "./add-task/AddTask";
import TaskFilters from "./task-filters/TaskFilters";
import TaskList from "./task-list/TaskList";
import { Task, Filter } from "../types/task";
import { addTask, toggleTask, deleteTask } from "../utils/taskUtils";

const TaskContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const handleAddTask = (taskText: string) => {
    setTasks((prevTasks) => addTask(prevTasks, taskText));
  };

  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) => toggleTask(prevTasks, id));
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => deleteTask(prevTasks, id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "active") return !task.isCompleted;
    return true;
  });

  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <Box marginBottom={2}>
        <TaskFilters filter={filter} onSetFilter={setFilter} />
      </Box>
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskContainer;
