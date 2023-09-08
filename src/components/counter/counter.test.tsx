import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: /Increment/i,
    });
    expect(incrementButton).toBeInTheDocument();
  });

  // test for 0 of heading
  it("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  // fire event and checking - fireEvent
  it("tests fireEvent() - checks increment after click on button", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    // firing event on button - fireEvent()
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  // fire event and checking - userEvent() [async operation]
  it("tests userEvent() - increment after click on button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    // firing event on button - userEvent()
    // userEvent is an async operation
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  // test input field and heading updation - via fireEvent
  it("fireEvent - renders a count of 10 after clicking the set button", () => {
    const view = render(<Counter />);
    // logRoles(view.container);
    const amountInputElement = screen.getByRole("spinbutton");
    // via fireEvent
    fireEvent.change(amountInputElement, { target: { value: 10 } });
    expect(amountInputElement).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: /set/i,
    });
    fireEvent.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  // test input and counter heading - via userEvent
  it("userEvent - renders a count of 10 after clicking the set button", async () => {
    const view = render(<Counter />);
    logRoles(view.container);
    const amountInputElement = screen.getByRole("spinbutton");
    // via userEvent
    await userEvent.type(amountInputElement, "10");
    expect(amountInputElement).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: /set/i,
    });
    await userEvent.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  // userEvent - now we write test for focus order - which is not possible with fireEvent
  it("userEvent - elements focus on right order", async () => {
    const view = render(<Counter />);
    logRoles(view.container);
    const amountInputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: /set/i,
    });
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });

    await userEvent.tab();
    expect(incrementButton).toHaveFocus();
    await userEvent.tab();
    expect(amountInputElement).toHaveFocus();
    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
