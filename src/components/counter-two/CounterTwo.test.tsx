import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("Counter Two", () => {
  it("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText(/counter two/i);
    expect(textElement).toBeInTheDocument();
  });

  // mocking functions
  it("should test handlers are called perfectly", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncremnt={incrementHandler}
        handleDecremnt={decrementHandler}
      />
    );
    // getting both buttons
    const incrementButtonElement = screen.getByRole("button", {
      name: /increment/i,
    });
    const decrementButtonElement = screen.getByRole("button", {
      name: /decrement/i,
    });
    // interaction here - userEvent
    await userEvent.click(incrementButtonElement);
    await userEvent.click(incrementButtonElement);
    await userEvent.click(decrementButtonElement);
    // checking functions how many time clicked
    expect(incrementHandler).toHaveBeenCalledTimes(2);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
