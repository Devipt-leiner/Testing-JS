test('test obf', () => {
  const data = { name: 'Leiner' };
  data.lastname = 'Barrios';
  expect(data).toEqual({ name: 'Leiner', lastname: 'Barrios' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('string', () => {
  expect('Leiner').toMatch(/iner/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
