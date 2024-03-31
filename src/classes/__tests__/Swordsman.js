import Swordsman from '../Swordsman';

test('Testing Swordsman creation with all values', () => {
  const result = new Swordsman('swordsman', 50, 50, 50, 50);

  expect(result).toEqual({
    name: 'swordsman', type: 'Swordsman', health: 50, level: 50, attack: 50, defence: 50,
  });
});

test('Testing Swordsman creation with default values', () => {
  const result = new Swordsman('swordsman');

  expect(result).toEqual({
    name: 'swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
