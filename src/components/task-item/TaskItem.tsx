import React from "react";
import { ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Task } from "../../types/task";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleTask,
  onDeleteTask,
}) => {
  return (
    <ListItem
      style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
      secondaryAction={
        <IconButton edge="end" onClick={() => onDeleteTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={task.isCompleted}
        onChange={() => onToggleTask(task.id)}
        inputProps={{ "aria-labelledby": task.id }}
      />
      <ListItemText id={task.id} primary={task.text} />
    </ListItem>
  );
};

export default TaskItem;
