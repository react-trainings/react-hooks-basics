import React, { useEffect } from 'react';

const Label = ({ text }) => {
  useEffect(() => {
    console.log('Label Mounted.');
    return () => {
      console.log('Label Unmounted.');
    };
  }, []);

  return (
    <p>
      <b>{text}</b>
    </p>
  );
};

export default Label;
