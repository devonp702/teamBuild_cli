const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
    super.parentMethod(getName, getId, getEmail, getRole);
  }
  getSchool() {
    return this.school;
  }
}
module.exports = {
  Intern: Intern
}