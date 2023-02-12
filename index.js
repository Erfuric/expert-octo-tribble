const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Array to store employee objects
const employees = [];

// Inquirer prompt for manager information
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?"
  }
];

// Inquirer prompt for engineer information
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?"
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?"
  }
];

// Inquirer prompt for intern information
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?"
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?"
  }
];

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What type of employee do you want to add?",
        choices: ["Engineer", "Intern", "Done"]
      }
    ])
    .then(answer => {
      switch (answer.role) {
        case "Engineer":
          inquirer.prompt(engineerQuestions).then(answers => {
            const { name, id, email, github } = answers;
            employees.push(new Engineer(name, id, email, github));
            addEmployee();
          });
          break;
        case "Intern":
          inquirer.prompt(internQuestions).then(answers => {
            const { name, id, email, school } = answers;
            employees.push(new Intern(name, id, email, school));
            addEmployee();
          });
          break;
        default:
          console.log(employees);
          break;
      }
    });
};

inquirer.prompt(managerQuestions).then(answers => {
    const { name, id, email, officeNumber } = answers;
    employees.push(new Manager(name, id, email, officeNumber));
    addEmployee();
});


// Load the HTML template
const template = handlebars.compile(
    fs.readFileSync(path.resolve(__dirname, "template.html"), "utf-8")
  );
  
  // Define the data that will be passed to the template
  const data = { employees };
  
  // Render the HTML with the employee data
  const html = template(data);
  
  // Write the generated HTML to a file
  fs.writeFileSync(path.resolve(__dirname, "output.html"), html);