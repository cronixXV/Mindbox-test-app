import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Filter } from "../../types/task";

interface TaskFiltersProps {
  filter: Filter;
  onSetFilter: (filter: Filter) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ filter, onSetFilter }) => {
  return (
    <ButtonGroup>
      <Button
        variant={filter === "all" ? "contained" : "outlined"}
        onClick={() => onSetFilter("all")}
      >
        Все
      </Button>
      <Button
        variant={filter === "active" ? "contained" : "outlined"}
        onClick={() => onSetFilter("active")}
      >
        Невыполненные
      </Button>
      <Button
        variant={filter === "completed" ? "contained" : "outlined"}
        onClick={() => onSetFilter("completed")}
      >
        Выполненные
      </Button>
    </ButtonGroup>
  );
};

export default TaskFilters;
