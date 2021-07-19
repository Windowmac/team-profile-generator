class Employee {
  constructor({ name, email, id, role }) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }

  getRole() {
      return this.role;
  }

  getName() {
      return this.name;
  }

  getEmail() {
      return this.email;
  }

  getId() {
      return this.id;
  }
}

module.exports = Employee;