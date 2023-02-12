const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const inquirer = require('inquirer');
const employees = require("./src/input");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Load the HTML template
const template = handlebars.compile(
    fs.readFileSync(path.resolve(__dirname, "template.html"), "utf-8")
  );

// Call the addEmployee function from input.js to prompt for user input and add employees to the employees array
employees.addEmployee();

// Define the data that will be passed to the template
const data = { employees: employees.employees };

// Render the HTML with the employee data
const html = template(data);

// Write the generated HTML to a file
fs.writeFileSync(path.resolve(__dirname, "dist/output.html"), html);
