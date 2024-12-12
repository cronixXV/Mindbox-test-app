import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "./TaskItem";
import { Task } from "../../types/task";

const exampleTask: Task = {
  id: "1",
  text: "Simple task",
  isCompleted: false,
};

describe("TaskItem", () => {
  test("renders task item with text", () => {
    render(
      <TaskItem
        task={exampleTask}
        onToggleTask={() => {}}
        onDeleteTask={() => {}}
      />
    );
    expect(screen.getByText("Simple task")).toBeInTheDocument();
  });

  test("renders completed task with line-through", () => {
    const completedTask = { ...exampleTask, isCompleted: true };
    const { container } = render(
      <TaskItem
        task={completedTask}
        onToggleTask={() => {}}
        onDeleteTask={() => {}}
      />
    );
    const listItem = container.firstChild;
    expect(listItem).toHaveStyle("text-decoration: line-through");
  });

  test("calls onDeleteTask when delete button is clicked", () => {
    const handleDelete = jest.fn();
    render(
      <TaskItem
        task={exampleTask}
        onToggleTask={() => {}}
        onDeleteTask={handleDelete}
      />
    );
    fireEvent.click(screen.getByTestId("DeleteIcon"));
    expect(handleDelete).toHaveBeenCalledWith(exampleTask.id);
  });

  test("calls onToggleTask when checkbox is clicked", () => {
    const handleToggle = jest.fn();
    render(
      <TaskItem
        task={exampleTask}
        onToggleTask={handleToggle}
        onDeleteTask={() => {}}
      />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleToggle).toHaveBeenCalledWith(exampleTask.id);
  });
});
