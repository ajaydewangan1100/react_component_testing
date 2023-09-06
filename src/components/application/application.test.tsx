import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  it("render correctly", () => {
    render(<Application />);
    // checking here name input box
    const nameInputElement = screen.getByRole("textbox"); // role is textbox for input type text
    expect(nameInputElement).toBeInTheDocument();

    // checking here select option element
    const optionsElement = screen.getByRole("combobox");
    expect(optionsElement).toBeInTheDocument();

    // checking for checkbox
    const termsCheckboxElement = screen.getByRole("checkbox");
    expect(termsCheckboxElement).toBeInTheDocument();

    // checking submit button
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
