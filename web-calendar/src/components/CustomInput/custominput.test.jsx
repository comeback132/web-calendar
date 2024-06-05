import { render, screen, fireEvent } from "@testing-library/react";
import CustomInput from "./CustomInput";

describe("CustomInput component", () => {
  it("should render CustomInput component correctly", () => {
    render(<CustomInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render CustomInput component with label correctly", () => {
    render(<CustomInput label="Username*" />);
    const labelElement = screen.getByText("Username*");
    expect(labelElement).toBeInTheDocument();
  });

  it("should render CustomInput component with placeholder correctly", () => {
    render(<CustomInput placeholder="Enter your username" />);
    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeInTheDocument();
  });

  it("should handle input change correctly", () => {
    render(<CustomInput />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
  });

  it("should toggle password visibility correctly", () => {
    render(
      <CustomInput
        label="Password*"
        type="password"
        showPasswordToggle={true}
      />
    );
    const passwordInput = screen.getByRole("textbox");
    const toggleButton = screen.getByRole("button");

    // Initial state: password is hidden
    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should render error message correctly", () => {
    render(<CustomInput label="Username*" error={true} />);
    const errorMessage = screen.getByText("Error message");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render disabled input correctly", () => {
    render(<CustomInput label="Username*" disabled={true} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  it("should render input with active state correctly", () => {
    render(<CustomInput label="Username*" active={true} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveStyle("border-bottom: 1px solid #323749");
  });

  it("should render input with filled state correctly", () => {
    render(<CustomInput label="Username*" filled={true} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveStyle("background: transparent");
  });
});
