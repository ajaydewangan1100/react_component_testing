import { useState } from "react";
import { UserCounterProps } from "./useCounter.types";

export const UserCounter = ({ initialCount = 0 }: UserCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  console.log(count, initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};
