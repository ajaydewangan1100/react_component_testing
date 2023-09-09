import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/users",
    (req, res, context) => {
      return res(
        context.status(200),
        context.json([
          {
            name: "Ajay Dewangan",
          },
          {
            name: "Aj Dew",
          },
          {
            name: "A D",
          },
        ])
      );
    }
  ),
];
