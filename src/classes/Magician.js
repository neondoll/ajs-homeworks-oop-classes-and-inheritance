import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Magician extends Character {
  constructor(name) {
    super(name, CharacterTypes.magician);
    this.attack = 10;
    this.defence = 40;
  }
}
