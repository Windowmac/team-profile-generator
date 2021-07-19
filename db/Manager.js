const Employee = require('./Employee');

class Manager extends Employee {
    constructor({ name, id, email, role, office }) {
      super({name, id, email, role});
      this.office = office;
    }

    getOffice(){
        return this.office;
    }
    buildManagerCard(){
      return `
      <div class="card col-3 manager-card">
        <div class="card-body">
          <h5 class="card-title">${this.getName()} <i class="bi bi-emoji-sunglasses"></i></h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">role: ${this.getRole()}</li>
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">email: ${this.getEmail()}</li>
            <li class="list-group-item">office: ${this.getOffice()}</li>
          </ul>
        </div>
      </div>`;
    }
  }

  module.exports = Manager;