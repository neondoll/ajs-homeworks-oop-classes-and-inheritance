import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Zombie extends Character {
  constructor(name) {
    super(name, CharacterTypes.zombie);
    this.attack = 40;
    this.defence = 10;
  }
}
