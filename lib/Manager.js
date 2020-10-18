const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
    super.parentMethod(getName, getId, getEmail, getRole);
  }
  getOffice() {
    return this.officeNumber;
  }
}
module.exports = {
  Manager: Manager
}