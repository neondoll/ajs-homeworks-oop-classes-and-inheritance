import Magician from '../Magician';

test('Testing Magician creation', () => {
  const result = new Magician('magician');

  expect(result).toEqual({
    name: 'magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
