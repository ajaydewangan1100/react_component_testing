import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  it("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText(/users/i);
    expect(textElement).toBeInTheDocument();
  });

  // mocking http - MSW
  it("should render list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem"); // await - because find is async
    expect(users).toHaveLength(3);
  });

  //   now we need to test error msg also
  it("should renders error msg", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, context) => {
          return res(context.status(500));
        }
      )
    );
    render(<Users />);
    // remember to use await - findBy.. in async
    const errorElement = await screen.findByText(/Error fetching users/i);
    expect(errorElement).toBeInTheDocument();
  });
});
