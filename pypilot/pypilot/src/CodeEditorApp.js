// CodeEditor.js
import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import "./Styles/CodeEditorApp.css";

import CodeEditor from "./Components/CodeEditor";

import "brace/mode/python";
import "brace/theme/monokai";

let logs = [];

/* eslint-disable */
console.oldLog = console.log;

console.log = function (value) {
  if (value !== "using indexedDB for stdlib modules cache") {
    console.oldLog(value);
    logs.push(`${value}`);
  }
};
/* eslint-disable */

const Scripts = ({ code }) => <script type="text/python">{code}</script>;

const output = (arr) => {
  let out = "";
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== arr.length - 1) {
      out = out.concat(`${arr[i]}\n`);
    } else {
      out = out.concat(arr[i]);
    }
  }
  return out;
};

const CodeEditorApp = () => {
  const [code, setCode] = useState("");
  const [outputArr, setOutputArr] = useState([]);

  const run = () => {
    try {
      window.brython([1]);
    } catch (error) {
      console.oldLog(error);
    }

    // Added setTimeout because console logs were being updated after 100 ms
    setTimeout(() => {
      setOutputArr(logs);
      console.oldLog("logsgasga", logs);
    }, 100);
  };

  const clearLogs = () => {
    logs = [];
    setOutputArr(logs);
  };

  return (
    <div id="python-editor-container">
      <Helmet>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.7.1/brython.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.7.1/brython_stdlib.js"
        />
      </Helmet>
      <Scripts code={code} />
      <div id="python-editor-input">
        <button type="button" onClick={run}>
          Run
        </button>
        <CodeEditor
          id="python-code-editor"
          value={code}
          mode="python"
          theme="monokai"
          onChange={(text) => setCode(text)}
          width={`${window.innerWidth / 2}px`}
          height={`${window.innerHeight}px`}
          fontSize={"1rem"}
        />
      </div>
      <div id="python-editor-output">
        <button type="button" onClick={clearLogs}>
          Clear
        </button>
        <textarea
          id="python-output"
          readOnly
          value={output(outputArr)}
          placeholder="> output goes here..."
        />
      </div>
    </div>
  );
};

Scripts.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeEditorApp;
