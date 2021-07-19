const Employee = require('../db/Employee');

test('employee receives a name', () => {
    const employee = new Employee({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer'});
    expect(employee.getName()).toBe('Bjorn');
  });

  test('employee receives an email address', () => {
    const employee = new Employee({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer'});
    expect(employee.getEmail()).toBe('engine@email');
  });

  test('employee receives an id', () => {
    const employee = new Employee({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer'});
    expect(employee.getId()).toBe('123');
  });

  test('employee receives a role:', () => {
    const employee = new Employee({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer'});
    expect(employee.getRole()).toBe('Engineer');
  });