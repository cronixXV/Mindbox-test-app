import { Task } from "../types/task";

export const addTask = (tasks: Task[], taskText: string): Task[] => {
  const newTask: Task = {
    id: Date.now().toString(),
    text: taskText,
    isCompleted: false,
  };
  return [...tasks, newTask];
};

export const toggleTask = (tasks: Task[], id: string): Task[] => {
  return tasks.map((task) =>
    task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  );
};

export const deleteTask = (tasks: Task[], id: string): Task[] => {
  return tasks.filter((task) => task.id !== id);
};
