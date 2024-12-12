import { render, fireEvent } from "@testing-library/react";
import TaskFilters from "./TaskFilters";

describe("TaskFilters", () => {
  const mockSetFilter = jest.fn();

  it("renders correctly with the current filter", () => {
    const { getByText } = render(
      <TaskFilters filter="all" onSetFilter={mockSetFilter} />
    );

    expect(getByText("Все")).toHaveClass("MuiButton-contained");
    expect(getByText("Невыполненные")).toHaveClass("MuiButton-outlined");
    expect(getByText("Выполненные")).toHaveClass("MuiButton-outlined");
  });

  it("changes filter when a button is clicked", () => {
    const { getByText } = render(
      <TaskFilters filter="all" onSetFilter={mockSetFilter} />
    );

    fireEvent.click(getByText("Все"));
    expect(mockSetFilter).toHaveBeenCalledWith("all");

    fireEvent.click(getByText("Невыполненные"));
    expect(mockSetFilter).toHaveBeenCalledWith("active");

    fireEvent.click(getByText("Выполненные"));
    expect(mockSetFilter).toHaveBeenCalledWith("completed");
  });
});
