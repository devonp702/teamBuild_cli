const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//code to use inquirer to gather information about the development team members,
const questions = [{
    type: "input",
    name: "mName",
    message: "Hello Manager, before we fill out the rest of your team we'll get your info, What is your name?"
  },
  {
    type: "input",
    name: "mId",
    message: "What is your Id?"
  },
  {
    type: "input",
    name: "mEmail",
    message: "What is your Email address?"
  },
  {
    type: "input",
    name: "mOn",
    message: "What is your Office Number?"
  }
]
const enquest = [{
    type: "input",
    name: "name",
    message: "What is the name of the engineer?"
  },
  {
    type: "input",
    name: "id",
    message: "What is the id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the Email address?"
  },
  {
    type: "input",
    name: "github",
    message: "What is the Github username?"
  }
]
const inquest = [{
    type: "input",
    name: "name",
    message: "What is the name of the Intern?"
  },
  {
    type: "input",
    name: "id",
    message: "What is the id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the Email address?"
  },
  {
    type: "input",
    name: "school",
    message: "What is the School Name?"
  }
]
let employees = []


function main(){
inquirer.prompt(questions)
  .then(data => {
    let me = new Manager(data.mName, data.mId, data.mEmail, data.mOn);
    employees.push(me);
    choose()
    return (employees);
  })
}
function choose () {
    inquirer.prompt([{
  type: 'list',
  name: 'memberChoice',
  message: 'Would you like to add a team member?',
  choices: [
    'Engineer',
    'Intern',
    'I am done adding team members. Make my file!'
  ]
}]).then(userChoice => {
  switch (userChoice.memberChoice) {
    case 'Engineer':
      addEn();
      break;
    case 'Intern':
      addIn();
      break;
    default:
      save();
  }
});
}

function addEn() {
  inquirer.prompt(enquest)
    .then(edata => {
      let engineer = new Engineer(edata.name, edata.id, edata.email, edata.github);
      employees.push(engineer);
      choose();
    })
}

function addIn() {
  inquirer.prompt(inquest)
    .then(idata => {
      let intern = new Intern(idata.name, idata.id, idata.email, idata.school);
      employees.push(intern);
      choose();
    })
}
const save = () => {
  // to create an HTML file using the `render` function. write it to a file named `team.html` in the `output` folder. use the variable `outputPath` 
  //check if the `output` folder exists and create it if it does not.
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  let html = render(employees);
  fs.writeFile(outputPath, html, function (err) {
    if (err) throw err;
    console.log("file saved")
  });
}
main();