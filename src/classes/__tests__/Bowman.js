import Bowman from '../Bowman';

test('Testing Bowman creation with all values', () => {
  const result = new Bowman('bowman', 50, 50, 50, 50);

  expect(result).toEqual({
    name: 'bowman', type: 'Bowman', health: 50, level: 50, attack: 50, defence: 50,
  });
});

test('Testing Bowman creation with default values', () => {
  const result = new Bowman('bowman');

  expect(result).toEqual({
    name: 'bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});
