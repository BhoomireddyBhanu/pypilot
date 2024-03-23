import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AceEditor from "react-ace";

const CodeEditor = ({ value: propValue, onChange }) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleOnChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const getValue = () => value;

  return (
    <AceEditor
      theme="twilight"
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
      onChange={handleOnChange}
      value={value}
    />
  );
};

CodeEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CodeEditor.defaultProps = {
  value: "",
  onChange: () => null,
};

export default CodeEditor;
