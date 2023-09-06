import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  it("render correctly", () => {
    render(<Application />);
    // checking here name input box
    const nameInputElement = screen.getByRole("textbox", {
      // role is textbox for input type text
      name: /name/i, // here we are using label - name
    }); // role is textbox for input type text
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

  it("render bio input via label text", () => {
    render(<Application />);
    // checking bio also added now - video 19
    const bioElement = screen.getByRole("textbox", {
      name: /bio/i, // using label - bio
    });
    expect(bioElement).toBeInTheDocument();
  });

  it("render heading h1 by name and h2 using level option", () => {
    render(<Application />);
    // checking headin h1- added now - video 19
    const headingH1Element = screen.getByRole("heading", {
      name: /application form/i, // using text of name
    });
    expect(headingH1Element).toBeInTheDocument();

    // checking headin h1- added now - video 19
    const headingH2Element = screen.getByRole("heading", {
      level: 2, // using level
    });
    expect(headingH2Element).toBeInTheDocument();
  });

  // getByLabelText - video 20
  it("render input - get by getByLabel", () => {
    render(<Application />);
    // checking here name input box - getByLabelText
    const nameInputElement = screen.getByLabelText(/name/i);
    expect(nameInputElement).toBeInTheDocument();

    // option element by getByLabelText
    const optionsElement = screen.getByLabelText(
      /agree to the terms and conditions/i
    );
    expect(optionsElement).toBeInTheDocument();

    // if two labels with same name - give selector
    const nameInput2Element = screen.getByLabelText(/name/i, {
      selector: "input",
    });
    expect(nameInput2Element).toBeInTheDocument();
  });
});
