import { render, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList";
import { Task } from "../../types/task";

describe("TaskList", () => {
  const mockOnToggleTask = jest.fn();
  const mockOnDeleteTask = jest.fn();

  const tasks: Task[] = [
    { id: "1", text: "Task 1", isCompleted: false },
    { id: "2", text: "Task 2", isCompleted: true },
  ];

  it("renders tasks correctly", () => {
    const { getByText } = render(
      <TaskList
        tasks={tasks}
        onToggleTask={mockOnToggleTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );

    expect(getByText("Task 1")).toBeInTheDocument();
    expect(getByText("Task 2")).toBeInTheDocument();
  });

  it("calls onToggleTask when a task is toggled", () => {
    const { getByText } = render(
      <TaskList
        tasks={tasks}
        onToggleTask={mockOnToggleTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );

    const task1Checkbox = getByText("Task 1")
      .closest("li")
      ?.querySelector("input[type='checkbox']");
    fireEvent.click(task1Checkbox!);

    expect(mockOnToggleTask).toHaveBeenCalledWith("1");
  });

  it("calls onDeleteTask when a task is deleted", () => {
    const { getByText } = render(
      <TaskList
        tasks={tasks}
        onToggleTask={mockOnToggleTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );

    const deleteButton = getByText("Task 1")
      .closest("li")
      ?.querySelector("button");
    fireEvent.click(deleteButton!);

    expect(mockOnDeleteTask).toHaveBeenCalledWith("1");
  });
});
