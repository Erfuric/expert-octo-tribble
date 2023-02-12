# expert-octo-tribble
Node.js command line application

## Description

A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

Application is using Inquirer 8.2.4



github link: https://github.com/Erfuric/expert-octo-tribble

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Folder Layout

├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
│   └── Employee.js
│   └── Engineer.js
│   └── Intern.js
│   └── Manager.js
├── src/                   // template helper code 
│   └── input.js
│   └── template.html
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json


## Installation

The following packages are required;

    "fs" npm i fs
    "handlebars" npm i handlebars
    "inquirer 8.2.4" npm i inquirer@8.2.4
    "jest" npm i jest
    "path" npm i path




## Credits

Created by myself using knowledge taught in class and information found through searching.



## License

MIT License

Copyright (c) [2023] [Callum Mackintosh]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.