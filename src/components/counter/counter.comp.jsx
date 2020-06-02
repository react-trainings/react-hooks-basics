import React, { useState, useEffect } from 'react';

export default function Counter() {
  const BASE_COUNT_STATE = 0;
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>Plus One</button>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>Minus One</button>
      <button onClick={() => setCount(BASE_COUNT_STATE)}>Reset</button>
    </div>
  );
}
