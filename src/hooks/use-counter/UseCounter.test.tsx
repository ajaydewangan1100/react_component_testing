import { act, render, renderHook } from "@testing-library/react";
import { UserCounter } from "./UseCounter";

describe("Custom Hook - useCounter", () => {
  it("should render initial count", () => {
    // this below render not work - typescript error
    // render(<UseCounter />)

    // also not work if we run directly - UseCounter - (invalid hook call)
    // UseCounter();

    // for rendering hooks RTL provides - renderHook
    // renderHook provide all return values as result - can't use screen for get
    const { result } = renderHook(UserCounter);

    expect(result.current.count).toBe(0);
  });

  // accept and render same initial count
  it("should accept and render same initial count", () => {
    const { result } = renderHook(UserCounter, {
      initialProps: {
        initialCount: 13,
      },
    });
    expect(result.current.count).toBe(13);
  });

  // testing with increment and decrement - with and without props
  it("should increment count, (with props)", () => {
    // with props
    const { result } = renderHook(UserCounter, {
      initialProps: {
        initialCount: 20,
      },
    });
    // wrapping into act()
    act(() => result.current.increment());
    expect(result.current.count).toBe(21);
  });

  // without props decrement
  it("should decrement count, (without props)", () => {
    // with props
    const { result } = renderHook(UserCounter);
    // wrapping into act()
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
