import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS", "React"];
  it("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  // getting element by - getAllByRole
  it(`render a list of ${skills.length} skills`, () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
    expect(listItemElement).toHaveLength(4);
  });
});
