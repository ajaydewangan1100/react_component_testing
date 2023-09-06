import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test.skip("render Hello text", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test.only("render Hello with name", () => {
    render(<Greet name="Ajay" />);
    const textElement = screen.getByText(/hello ajay/i);
    expect(textElement).toBeInTheDocument();
  });
});
