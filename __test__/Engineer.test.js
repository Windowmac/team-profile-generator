const Engineer = require('../db/Engineer');

test('Engineer receives a name', () => {
    const engineer = new Engineer({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer', gitHub: 'www.github.com'});
    expect(engineer.getName()).toBe('Bjorn');
  });

  test('engineer receives an email address', () => {
    const engineer = new Engineer({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer', gitHub: 'www.github.com'});
    expect(engineer.getEmail()).toBe('engine@email');
  });

  test('engineer receives an id', () => {
    const engineer = new Engineer({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer', gitHub: 'www.github.com'});
    expect(engineer.getId()).toBe('123');
  });

  test('engineer receives role of Engineer: ', () => {
    const engineer = new Engineer({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer', gitHub: 'www.github.com'});
    expect(engineer.getRole()).toBe('Engineer');
  });

  test('engineer receives a gitHub:', () => {
    const engineer = new Engineer({name: 'Bjorn', id: '123', email: 'engine@email', role: 'Engineer', gitHub: 'www.github.com'});
    expect(engineer.getGitHub()).toBe('www.github.com');
  });