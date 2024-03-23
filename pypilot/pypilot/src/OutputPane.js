import React from 'react';

const OutputPane = ({ output }) => {
  return (
    <div>
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default OutputPane;
