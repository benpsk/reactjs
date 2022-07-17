import { useState, useEffect } from "react";

const COUNT = "count";
const STEP = "step";
const MAX = "max";

const getLocalStorageCount = (type) => {
  switch (type) {
    case COUNT:
      const count = localStorage.getItem(COUNT);

      if (count) return JSON.parse(count).count;
      return { count: 0 };

    case STEP:
      const step = localStorage.getItem(STEP);

      if (step) return JSON.parse(step).step;
      return { step: 1 };

    case MAX:
      const max = localStorage.getItem(MAX);

      if (max) return JSON.parse(max).max;
      return { max: 10 };

    default:
      return { count: 0, step: 1, max: 10 };
  }
};

const storeStateInLocalStorage = (count, step, max) => {
  localStorage.setItem(COUNT, JSON.stringify({ count }));
  localStorage.setItem(STEP, JSON.stringify({ step }));
  localStorage.setItem(MAX, JSON.stringify({ max }));
};

const Counter = () => {
  const [count, setCount] = useState(getLocalStorageCount(COUNT));

  const [step, setStep] = useState(getLocalStorageCount(STEP));

  const [max, setMax] = useState(getLocalStorageCount(MAX));

  useEffect(() => {
    storeStateInLocalStorage(count, step, max);
  }, [count, step, max]);

  const increment = () => {
    setCount((count) => {
      if (count >= max) return count;
      return count + +step;
    });
  };

  const decrement = () => {
    setCount((count) => {
      if (count <= 0) return count;
      return count - +step;
    });
  };

  const reset = () => {
    setCount(0);
    setStep(1);
    setMax(10);
  };

  const handleStep = (event) => {
    setStep(event.target.value);
  };

  const handleMax = (event) => {
    setMax(event.target.value);
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <br />
      <label htmlFor="step">
        Step
        <input
          type="number"
          value={step}
          className="step"
          onChange={handleStep}
        />
      </label>
      &nbsp;
      <label htmlFor="max">
        Max
        <input
          type="number"
          value={max}
          className="step"
          onChange={handleMax}
        />
      </label>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
