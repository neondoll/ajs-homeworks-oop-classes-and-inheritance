import Magician from '../Magician';

test('Testing Magician creation with all values', () => {
  const result = new Magician('magician', 50, 50, 50, 50);

  expect(result).toEqual({
    name: 'magician', type: 'Magician', health: 50, level: 50, attack: 50, defence: 50,
  });
});

test('Testing Magician creation with default values', () => {
  const result = new Magician('magician');

  expect(result).toEqual({
    name: 'magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
