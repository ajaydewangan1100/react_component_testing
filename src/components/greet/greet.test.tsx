import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("render greet", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
