import { fireEvent, render, screen } from "@testing-library/react";
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
});
