import { useState, useEffect } from "react";

const COUNT = "count";
const STEP = "step";
const MAX = "max";

const getLocalStorageCount = (initialState, key) => {
  const storage = localStorage.getItem(key);

  if (storage.key) return JSON.parse(storage).key;
  return initialState;
};

const storeStateInLocalStorage = (count, step, max) => {
  localStorage.setItem(COUNT, JSON.stringify({ count }));
  localStorage.setItem(STEP, JSON.stringify({ step }));
  localStorage.setItem(MAX, JSON.stringify({ max }));
};

// const useLocalStorage = (initialState, key) => {
//   const get = () => {
//     const storage = localStorage.getItem(key);

//     if (storage.value) return JSON.parse(storage).value;

//     return initialState;
//   };
//   const [value, setValue] = useState(get());

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify({ value }));
//   }, [value, key]);

//   return [value, setValue];
// };

const Counter = () => {
  const paramCount = getLocalStorageCount(0, COUNT);
  const paramStep = getLocalStorageCount(1, STEP);
  const paramMax = getLocalStorageCount(10, MAX);

  const [count, setCount] = useState(paramCount);
  const [step, setStep] = useState(paramStep);
  const [max, setMax] = useState(paramMax);

  useEffect(() => {
    storeStateInLocalStorage(count, step, max);
  }, [count, step, max]);

  // using custom hook
  // const [count, setCount] = useLocalStorage(0, COUNT);
  // const [max, setMax] = useLocalStorage(10, MAX);
  // const [step, setStep] = useLocalStorage(1, STEP);

  // simple state
  // const [count, setCount] = useState(0);
  // const [max, setMax] = useState(10);
  // const [step, setStep] = useState(1);

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
};;;;

export default Counter;
