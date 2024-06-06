import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  it("should render Checkbox component correctly", () => {
    render(<Checkbox />);
    const element = screen.getByRole("checkbox");
    expect(element).toBeInTheDocument();
  });

  it("should render Checkbox with label", () => {
    render(<Checkbox label="Text" />);
    const labelElement = screen.getByText("Text");
    expect(labelElement).toBeInTheDocument();
  });

  it("should toggle the checked state when clicked", () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole("checkbox");

    fireEvent.click(checkboxElement);
    expect(checkboxElement.checked).toEqual(true);

    fireEvent.click(checkboxElement);
    expect(checkboxElement.checked).toEqual(false);
  });
});
