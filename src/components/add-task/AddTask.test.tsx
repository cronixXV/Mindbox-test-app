import { render, fireEvent, waitFor } from "@testing-library/react";
import AddTask from "./AddTask";

test("calls onAddTask with correct input and clears field", async () => {
  const mockOnAddTask = jest.fn();
  const { getByLabelText, getByText } = render(
    <AddTask onAddTask={mockOnAddTask} />
  );

  const input = getByLabelText("Новая задача");
  const addButton = getByText("Добавить");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  await waitFor(() => expect(mockOnAddTask).toHaveBeenCalledWith("New Task"));

  expect(input).toHaveValue("");
});
