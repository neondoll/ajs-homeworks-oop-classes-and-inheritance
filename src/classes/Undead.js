import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Undead extends Character {
  constructor(name) {
    super(name, CharacterTypes.undead);
    this.attack = 25;
    this.defence = 25;
  }
}
