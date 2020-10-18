const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(Employee);
    this.role = "Engineer";
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer