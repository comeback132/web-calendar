import { render, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";

describe("Button component", () => {
  it("should render Button component correctly", () => {
    render(<CustomButton />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  it("should render Primary Button with 'Button' text", () => {
    render(<CustomButton primary>Button</CustomButton>);
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Secondary Button with 'Button' text", () => {
    render(<CustomButton secondary>Button</CustomButton>);
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Button with Icon and 'Button' text", () => {
    render(
      <CustomButton withIcon>
        <img src="icon.png" alt="icon" />
        Button
      </CustomButton>
    );
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Primary Button with Icon and 'Button' text", () => {
    render(
      <CustomButton primary withIcon>
        <img src="icon.png" alt="icon" />
        Button
      </CustomButton>
    );
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Disabled Button with 'Button' text", () => {
    render(<CustomButton disabled>Button</CustomButton>);
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Primary Disabled Button with 'Button' text", () => {
    render(<CustomButton primary disabled>Button</CustomButton>);
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Primary Disabled Button with Icon and 'Button' text", () => {
    render(
      <CustomButton primary disabled withIcon>
        <img src="icon.png" alt="icon" />
        Button
      </CustomButton>
    );
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Secondary Disabled Button with 'Button' text", () => {
    render(<CustomButton secondary disabled>Button</CustomButton>);
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });

  it("should render Secondary Disabled Button with Icon and 'Button' text", () => {
    render(
      <CustomButton secondary disabled withIcon>
        <img src="icon.png" alt="icon" />
        Button
      </CustomButton>
    );
    const element = screen.getByText("Button");
    expect(element).toBeInTheDocument();
  });
});
