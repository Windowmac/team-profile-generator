const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({ name, id, email, role, gitHub }) {
      super({name, id, email, role});
      this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    buildEngineerCard(){
      return `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${this.getName()}</h5>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">role: ${this.getRole()}</li>
                    <li class="list-group-item">ID: ${this.getId()}</li>
                    <li class="list-group-item">email: ${this.getEmail()}</li>
                    <li class="list-group-item">office: ${this.getGitHub()}</li>
                  </ul>
                </div>
              </div>`;
    }
  }



  module.exports = Engineer;