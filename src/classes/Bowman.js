import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Bowman extends Character {
  constructor(name, health = 100, level = 1, attack = 25, defence = 25) {
    super(name, CharacterTypes.bowman, health, level, attack, defence);
  }
}
