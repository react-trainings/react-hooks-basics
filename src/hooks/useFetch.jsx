import { useEffect, useState } from 'react';

const useFetch = (url, factCount) => {
  const [response, setResponse] = useState({ data: null, loading: true });

  useEffect(() => {
    fetch(url)
      .then((data) => data.text())
      .then((text) => {
        console.log(text);
        setResponse({ data: text, loading: false });
      });
  }, [url, factCount]);

  return response;
};

export default useFetch;
