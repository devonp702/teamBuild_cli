// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.role= "Employee"
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function(){
      return this.name;
    }
    this.getId = function(){
      return this.id;
    }
    this.getEmail = function(){
      return this.email;
    }
    this.getRole = function(){
      return this.role;
    }
  }
};

module.exports = {
  Employee: Employee
}