import React, { useState } from 'react';
import { useFetch } from '../../hooks';

const NumberFacts = () => {
  const [factCount, setFactCount] = useState(0);
  const { data, loading } = useFetch(`https://catfact.ninja/fact`, factCount);

  return (
    <>
      {loading ? (
        <b>Loading...</b>
      ) : (
        <p>
          {data ? (
            <>
              <b>Fact No: {factCount} - </b>
              <span>{JSON.parse(data).fact}</span>
            </>
          ) : null}
        </p>
      )}
      <button onClick={() => setFactCount((factCount) => factCount + 1)}>Random Cat Fact</button>
    </>
  );
};

export default NumberFacts;
