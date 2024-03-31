import Zombie from '../Zombie';

test('Testing Zombie creation', () => {
  const result = new Zombie('zombie');

  expect(result).toEqual({
    name: 'zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
