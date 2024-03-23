// Quizzes.js

import React from 'react';

const Quizzes = () => {
  return (
    <div>
      <h3>Quiz 1: What is the output of the following code?</h3>
      <pre>
        <code>
          {`salary = 8000

def printSalary():
  salary = 12000
  print("Salary:", salary)
  
printSalary()
print("Salary:", salary)`}
        </code>
      </pre>
      <p>Options:</p>
      <ol>
        <li>Salary: 12000 Salary: 8000</li>
        <li>Salary: 8000 Salary: 12000</li>
        <li>The program failed with errors</li>
      </ol>
      <h3>Quiz 2: A string is immutable in Python?</h3>
      <p>Options:</p>
      <ol>
        <li>True</li>
        <li>False</li>
      </ol>

      <h3>Quiz 3: What is the output of the following code?</h3>
      <pre>
        <code>
          {`var1 = 1
var2 = 2
var3 = "3"

print(var1 + var2 + var3)`}
        </code>
      </pre>
      <p>Options:</p>
      <ol>
        <li>6</li>
        <li>33</li>
        <li>123</li>
        <li>Error. Mixing operators between numbers and strings are not supported</li>
      </ol>
      <h3>Quiz 4: Which operator has higher precedence in the following list</h3>
      <p>Options:</p>
      <ol>
        <li>% (Modulus)</li>
        <li>& (BitWise AND)</li>
        <li>** (Exponent)</li>
        <li> (Comparison)</li>
      </ol>
    </div>
  );
};

export default Quizzes;
