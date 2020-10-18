const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
    super.getName();
    super.getId();
    super.getEmail()
    super.getRole()
  }
  get github() {
    return this.github;
  }
}
module.exports = {
  Engineer: Engineer
}