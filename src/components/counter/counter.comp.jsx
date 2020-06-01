import React, { useState } from 'react';

export default function Counter() {
  const BASE_COUNT_STATE = 0;
  const [count, setCount] = useState(BASE_COUNT_STATE);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>Plus One</button>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>Minus One</button>
      <button onClick={() => setCount(BASE_COUNT_STATE)}>Reset</button>
    </div>
  );
}
