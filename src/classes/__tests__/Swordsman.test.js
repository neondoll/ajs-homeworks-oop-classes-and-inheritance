import Swordsman from '../Swordsman';

test('Testing Swordsman creation', () => {
  const result = new Swordsman('swordsman');

  expect(result).toEqual({
    name: 'swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
