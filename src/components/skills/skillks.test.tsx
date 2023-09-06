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

  // getting button
  it(`renders Login button`, () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });

  // getting button element which is not present on rendering time - queryBy
  it(`Start learning button is not rendered`, () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: /start learning/i,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  // getting button which is appearing and disappearing - findBy - async method
  // we can update timeout of findBy.. and findAllBy..
  it("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: /start learning/i,
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
