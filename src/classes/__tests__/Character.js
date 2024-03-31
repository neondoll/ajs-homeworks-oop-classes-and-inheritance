import Character from '../Character';
import CharacterTypes from '../../data/CharacterTypes';

test.each([
  ['less than 2', 'i'],
  ['longer than 10', 'abandonment'],
])('Testing Character creation with a name exception where the passed name is %s', (_, name) => {
  expect(() => new Character(name, CharacterTypes.bowman, 50, 50, 50, 50)).toThrow(Error);
});

test('Testing Character creation with type exception', () => {
  expect(() => new Character('character', 'Character', 50, 50, 50, 50)).toThrow(Error);
});
