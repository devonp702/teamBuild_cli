const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
const questions = [
  {
    type: "input",
    name:"mName",
    message:"Hello Manager, before we fill out the rest of your team we'll get your info, What is your name?"
  },
  {
    type: "input",
    name:"mId",
    message:"What is your Id?"
  },
  {
    type: "input",
    name:"mEmail",
    message:"What is your Email address?"
  },
  {
    type: "input",
    name:"mOn",
    message:"What is your Office Number?"
  },
  {
    type: "number",
    name: "engineers",
    message: "How many engineers on your team?"
  },
  {
    type: "number",
    name: "interns",
    message: "How many interns on your team?"
  }
]
// and to create objects for each team member (using the correct classes as blueprints!)
if(!fs.existsSync(OUTPUT_DIR)){
  fs.mkdirSync(OUTPUT_DIR)
}
inquirer.prompt(questions)
.then(data => {
let me = new Manager(data.mName, data.mId, data.mEmail, data.mOn)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
let employees = [me];
let html = render(employees);
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
fs.writeFile(outputPath, html, function(err){
  if (err) throw err;
  console.log("file saved")
});
});

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
