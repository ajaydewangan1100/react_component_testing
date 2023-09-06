import { greetProps } from "./greet.types";

export const Greet = ({ name }: greetProps) => {
  return <div>Hello {name ? name : "Guest"} </div>;
};
