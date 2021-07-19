const Intern = require('../db/Intern');

test('intern receives a name', () => {
    const intern = new Intern({name: 'Bjorn', id: '123', email: 'interns@email.com', role: 'Intern', school: 'Cool-School'});
    expect(intern.getName()).toBe('Bjorn');
  });

  test('intern receives an email address', () => {
    const intern = new Intern({name: 'Bjorn', id: '123', email: 'interns@email.com', role: 'Intern', school: 'Cool-School'});
    expect(intern.getEmail()).toBe('interns@email.com');
  });

  test('intern.getId() returns intern.id', () => {
    const intern = new Intern({name: 'Bjorn', id: '123', email: 'interns@email.com', role: 'Intern', school: 'Cool-School'});
    expect(intern.getId()).toBe('123');
  });

  test('intern.getRole() returns intern.role:', () => {
    const intern = new Intern({name: 'Bjorn', id: '123', email: 'interns@email.com', role: 'Intern', school: 'Cool-School'});
    expect(intern.getRole()).toBe('Intern');
  });

  test('intern.getSchool() returns intern.school:', () => {
    const intern = new Intern({name: 'Bjorn', id: '123', email: 'interns@email.com', role: 'Intern', school: 'Cool-School'});
    expect(intern.getSchool()).toBe('Cool-School');
  });