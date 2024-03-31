import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Bowman extends Character {
  constructor(name) {
    super(name, CharacterTypes.bowman);
    this.attack = 25;
    this.defence = 25;
  }
}
