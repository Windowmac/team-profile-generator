const inquirer = require('inquirer');
const axios = require('axios');
class Team {
  constructor(manager, engineerList, internList) {
    this.manager = manager;
    this.engineerList = engineerList;
    this.internList = internList;
  }
  
  async enterTeam() {
    //prompt for team, return answer data
    const managerPrompt = () => {
          return inquirer
            .prompt([
              {
                name: 'name',
                type: 'input',
                message: 'enter the manager of your team',
              },
              {
                name: 'email',
                type: 'input',
                message: 'enter manager email',
              },
              {
                name: 'id',
                type: 'input',
                message: 'input manager employee ID',
              },
              {
                name: 'office',
                type: 'input',
                message: 'input manager office number',
              },
            ])
            .then(
              (answer) => answer,
              (err) => {
                throw new Error(err);
              }
            )
        ;
    }


    this.manager = new Manager(await managerPrompt());
    this.internList = Intern.prototype.buildInternList(this);
    
  }
}
  

class Manager {
  constructor({ name, id, email, office }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
  }
}

class Engineer {
  constructor({ name, id, email, gitHub }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
  }
  
  buildEngineerList () {
    const engineerList = [];

    function engineerPrompt() {
      inquirer
        .prompt([
          {
            name: 'name',
            type: 'input',
            message: 'enter an engineer of your team',
          },
          {
            name: 'email',
            type: 'input',
            message: 'enter engineer email',
          },
          {
            name: 'id',
            type: 'input',
            message: 'input engineer employee ID',
          },
          {
            name: 'gitHub',
            type: 'input',
            message: 'input engineer gitHub id',
          },
          {
            name: 'another',
            type: 'confirm',
            message: 'enter another engineer?',
          },
        ])
        .then(
          (answer) => {
            engineerList.push(new Engineer(answer));
            console.log(engineerList);
            if (answer.another) {
              engineerPrompt();
            }
          },
          (err) => {
            throw new Error(err);
          }
        );
    }
    engineerPrompt();
    return engineerList;
  }
  
}

class Intern {
  constructor({ name, id, email, school }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  buildInternList(team) {
    const internList = [];

    function internPrompt() {
      inquirer
        .prompt([
          {
            name: 'name',
            type: 'input',
            message: 'enter an intern of your team',
          },
          {
            name: 'email',
            type: 'input',
            message: 'enter intern email',
          },
          {
            name: 'id',
            type: 'input',
            message: 'input intern employee ID',
          },
          {
            name: 'school',
            type: 'input',
            message: 'input intern school',
          },
          {
            name: 'another',
            type: 'confirm',
            message: 'enter another intern?',
          },
        ])
        .then(
          (answer) => {
            internList.push(new Intern(answer));
            console.log(internList);
            if (answer.another) {
              internPrompt();
            } else {
              team.engineerList = Engineer.prototype.buildEngineerList();
            }
          },
          (err) => {
            throw new Error(err);
          }
        );
    }
    internPrompt();
    return internList;
  }
}

const team = new Team();
team.enterTeam();
