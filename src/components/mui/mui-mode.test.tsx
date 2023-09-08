import { screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
// import { AppProviders } from "../../providers/app-providers";
import { render } from "../../test-utils";

describe("Mui Mode", () => {
  it("renders text correctly - with ApppProvider (wrapper)", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent(/dark mode/i);
  });
});
