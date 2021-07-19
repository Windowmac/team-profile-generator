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
}

module.exports = Employee;