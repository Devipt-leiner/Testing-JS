const Person = require('./person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Leiner', 35, 1.75);
  });

  test('Should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('Should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
