import Undead from '../Undead';

test('Testing Undead creation', () => {
  const result = new Undead('undead');

  expect(result).toEqual({
    name: 'undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
