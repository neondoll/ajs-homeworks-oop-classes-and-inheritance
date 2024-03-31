import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Daemon extends Character {
  constructor(name) {
    super(name, CharacterTypes.daemon);
    this.attack = 10;
    this.defence = 40;
  }
}
