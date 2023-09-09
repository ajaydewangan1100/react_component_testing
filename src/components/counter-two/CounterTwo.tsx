import { CounterTwoProps } from "./CounterTwo.types";

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handleIncremnt && (
        <button onClick={props.handleIncremnt}>Increment</button>
      )}
      {props.handleDecremnt && (
        <button onClick={props.handleDecremnt}>Decrement</button>
      )}
    </div>
  );
};
