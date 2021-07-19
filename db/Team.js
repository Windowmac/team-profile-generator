const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');


class Team {
    constructor(manager, engineerList, internList) {
      this.manager = manager;
      this.engineerList = [];
      this.internList = [];
    }
  
    startBuild() {
      const enterTeam = async() =>{
        const managerAsnwers = await this.managerPrompt();
        this.manager = new Manager(managerAsnwers);
        this.buildLists();
      }
      enterTeam();
    }

    async managerPrompt() {
      const managerInfo = await inquirer.prompt([
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
      managerInfo.role = 'Manager';
      return managerInfo;
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
        engineerInfo.role = 'Engineer';
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
        internInfo.role = 'Intern';
        const newIntern = new Intern(internInfo);
        this.internList.push(newIntern);
        if (internInfo.another) return internPrompt();
        engineerPrompt();
      };
      internPrompt();
    }
  
    buildHTML() {
      const pageTop = fs.readFileSync('./src/page-top.txt', 'utf8', err => {throw new Error(err);});
      const pageBottom = fs.readFileSync('./src/page-bottom.txt', 'utf8', err => {throw new Error(err);});
      const pageCss = fs.readFileSync('./src/page-css.css', 'utf8', err => {throw new Error(err);});

      const managerCard = this.manager.buildManagerCard();
      const internCards = this.internList.map(intern => {
        return intern.buildInternCard() + '\n';
      });
      const engineerCards = this.engineerList.map(engineer => {
        return engineer.buildEngineerCard() + '\n';
      });

      const page = `${pageTop}\n
                      ${managerCard}\n
                      ${engineerCards.join('\n')}\n
                      ${internCards.join('\n')}\n
                    ${pageBottom}\n
                  `;
      
      fs.writeFileSync('./dist/new-team.html', page, 'utf8', err => {throw new Error(err);});
      fs.writeFileSync('./dist/new-team-css.css', pageCss, 'utf8', err => {throw new Error(err);});
    }
    
  }

  module.exports = Team;