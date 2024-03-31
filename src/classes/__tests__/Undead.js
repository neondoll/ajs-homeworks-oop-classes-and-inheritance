import Undead from '../Undead';

test('Testing Undead creation with all values', () => {
  const result = new Undead('undead', 50, 50, 50, 50);

  expect(result).toEqual({
    name: 'undead', type: 'Undead', health: 50, level: 50, attack: 50, defence: 50,
  });
});

test('Testing Undead creation with default values', () => {
  const result = new Undead('undead');

  expect(result).toEqual({
    name: 'undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
