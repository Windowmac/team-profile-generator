const Employee = require('./Employee');

class Manager extends Employee {
    constructor({ name, id, email, role, office }) {
      super({name, id, email, role});
      this.office = office;
    }

    getOffice(){
        return this.office;
    }
    buildManagerCard(){}
  }

  module.exports = Manager;