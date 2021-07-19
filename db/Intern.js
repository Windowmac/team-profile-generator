const Employee = require('./Employee');

class Intern extends Employee {
    constructor({ name, id, email, role, school }) {
        super({name, id, email, role});
        this.school = school;
      }

      getSchool() {
          return this.school;
      }

      buildInternCard(){
        return `
        <div class="card col-3 intern-card">
          <div class="card-body">
            <h5 class="card-title">${this.getName()} <i class="bi bi-emoji-expressionless"></i></h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">role: ${this.getRole()}</li>
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item">email: ${this.getEmail()}</li>
                <li class="list-group-item">office: ${this.getSchool()}</li>
              </ul>
          </div>
        </div>`;
      }
  }

  module.exports = Intern;