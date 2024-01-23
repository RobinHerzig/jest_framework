<h1>Jest Framework</h1>
Jest is a testing framework. It works by importing a function and comparing it against the expected results.

<h2>Setup (from scratch)</h2>
This repo was created using the following steps:
<ol>
  <li>Run <code>npm init</code>.</li>
  <li>Run <code>npm install --save-dev jest</code>.</li>
  <li>In package.json, add or edit <code>"test": "jest"</code> to the scripts object.</li>
</ol>

Testing typically includes 3 files: an input file, logic file, and testing file.
<ul>
  <li>The input file contains the raw data. In this case it's a .txt file, but it could also be a JavaScript file.</li>
  <li>The logic file contains a function that manipulates the data. It should include an export statement.</li>
  <li>The testing file imports the input data and function, runs them, and compares it to an expected result. The name should match the logic file with the addition of .test (e.g. logic.test.js).</li>
</ul>

<h2>Running Jest</h2>
To run Jest, enter <code>npm test</code> in the terminal.

After it runs, it'll return a pass and/or fail:

<img src="https://github.com/RobinHerzig/jest_framework/assets/102714056/3ff04b09-aff5-4766-b1e4-227eeb67c3e6" alt="Pass example" width="350px"><br>
<img src="https://github.com/RobinHerzig/jest_framework/assets/102714056/a0875e5e-c198-4f4e-a15a-6842618590f9" alt="Fail example" width="350px">


