import React, { useState, useEffect, useRef } from 'react';

export default function Counter({ reRender = true }) {
  const BASE_COUNT_STATE = 0;
  const counter = useRef(BASE_COUNT_STATE);
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));

  useEffect(() => {
    console.log('Counter component mounted.');
  }, []);

  useEffect(() => {
    console.log('Counter component re-rendered.');
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const incrementCount = () => {
    if (reRender) {
      setCount((currentCount) => currentCount + 1);
    }
    counter.current.value = +counter.current.value + 1;
  };

  return (
    <div>
      <input ref={counter} type="text" disabled={true} value={count} />
      <button onClick={incrementCount}>Plus One</button>
      <button onClick={() => setCount(() => +counter.current.value - 1)}>Minus One</button>
      <button onClick={() => setCount(BASE_COUNT_STATE)}>Reset</button>
    </div>
  );
}
