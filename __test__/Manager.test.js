const Manager = require('../db/Manager');

test('manager receives a name', () => {
    const manager = new Manager({name: 'Bjorn', id: '123', email: 'manager@email.com', role: 'Manager', office: '42'});
    expect(manager.getName()).toBe('Bjorn');
  });

  test('manager receives an email address', () => {
    const manager = new Manager({name: 'Bjorn', id: '123', email: 'manager@email.com', role: 'Manager', office: '42'});
    expect(manager.getEmail()).toBe('manager@email.com');
  });

  test('manager.getId() returns manager.id', () => {
    const manager = new Manager({name: 'Bjorn', id: '123', email: 'manager@email.com', role: 'Manager', office: '42'});
    expect(manager.getId()).toBe('123');
  });

  test('manager.getRole() returns manager.role:', () => {
    const manager = new Manager({name: 'Bjorn', id: '123', email: 'manager@email.com', role: 'Manager', office: '42'});
    expect(manager.getRole()).toBe('Manager');
  });

  test('manager.getOffice() returns manager.office:', () => {
    const manager = new Manager({name: 'Bjorn', id: '123', email: 'manager@email.com', role: 'Manager', office: '42'});
    expect(manager.getOffice()).toBe('42');
  });