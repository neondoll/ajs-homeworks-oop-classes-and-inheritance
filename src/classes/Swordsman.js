import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, CharacterTypes.swordsman);
    this.attack = 40;
    this.defence = 10;
  }
}
