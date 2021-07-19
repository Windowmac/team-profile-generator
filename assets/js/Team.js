const inquirer = require('inquirer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');


class Team {
    constructor(manager, engineerList, internList) {
      this.manager = manager;
      this.engineerList = [];
      this.internList = [];
    }
  
    managerPrompt() {
      return inquirer.prompt([
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
      ]);
    }
  
  
    buildLists() {
      const engineerPrompt = async() => {
        const engineerInfo = await inquirer.prompt([
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
        ]);
  
        this.engineerList.push(new Engineer(engineerInfo));
        if (engineerInfo.another) return engineerPrompt();
        this.buildHTML();
      };
  
      const internPrompt = async () => {
        const internInfo = await inquirer.prompt([
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
        ]);
        const newIntern = new Intern(internInfo);
        this.internList.push(newIntern);
        if (internInfo.another) return internPrompt();
        engineerPrompt();
      };
      internPrompt();
    }
  
    buildHTML() {
      console.log('build it: ' + JSON.stringify(this));
    }
  
    startBuild() {
      const enterTeam = async() =>{
        const managerAsnwers = await this.managerPrompt();
        this.manager = new Manager(managerAsnwers);
        this.buildLists();
      }
      enterTeam();
    }
  }

  module.exports = Team;