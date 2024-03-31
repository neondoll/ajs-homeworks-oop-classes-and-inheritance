import Bowman from '../Bowman';

test('Testing Bowman creation', () => {
  const result = new Bowman('bowman');

  expect(result).toEqual({
    name: 'bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});
