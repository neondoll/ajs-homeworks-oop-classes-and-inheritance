import Zombie from '../Zombie';

test('Testing Zombie creation with all values', () => {
  const result = new Zombie('zombie', 50, 50, 50, 50);

  expect(result).toEqual({
    name: 'zombie', type: 'Zombie', health: 50, level: 50, attack: 50, defence: 50,
  });
});

test('Testing Zombie creation with default values', () => {
  const result = new Zombie('zombie');

  expect(result).toEqual({
    name: 'zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
