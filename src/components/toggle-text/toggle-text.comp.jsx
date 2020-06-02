import React, { useState } from 'react';
import Label from '../label/label.comp';

const ToggleText = ({ text = 'Hello' }) => {
  const [showText, setShowText] = useState(true);
  return (
    <div>
      {showText && <Label text={text} />}
      <button onClick={() => setShowText(!showText)}>Show/Hide</button>
    </div>
  );
};

export default ToggleText;
