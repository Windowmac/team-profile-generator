const inquirer = require('inquirer');

class Team {
  constructor(manager, engineerList, internList) {
    this.manager = manager;
    this.engineerList = engineerList;
    this.internList = internList;
  }
  enterTeam() {
    //prompt for team, return answer data
    function managerPrompt() {
      inquirer
        .prompt([
          {
            name: 'managerName',
            type: 'input',
            message: 'enter the manager of your team',
          },
          {
            name: 'email',
            type: 'input',
            message: 'enter manager email',
          },
          {
            name: 'ID',
            type: 'input',
            message: 'input manager employee ID',
          },
          {
            name: 'office',
            type: 'input',
            message: 'input manager office number',
          },
        ])
        .then((answer) => answer);
    }
    const manager = managerPrompt();
    //TODO: This shit is off sync somehow
  }
}

class Manager {
  constructor({ managerName }, { ID }, { email }, { office }) {
    this.name = managerName;
    this.ID = ID;
    this.email = email;
    this.office = office;
  }
}

class Engineer {
  constructor(name, ID, email, gitHub) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.gitHub = gitHub;
  }
}

class Intern {
  constructor(name, ID, email, school) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.school = school;
  }
}

const team = new Team();
team.enterTeam();
