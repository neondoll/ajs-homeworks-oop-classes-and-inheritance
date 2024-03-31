import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Swordsman extends Character {
  constructor(name, health = 100, level = 1, attack = 40, defence = 10) {
    super(name, CharacterTypes.swordsman, health, level, attack, defence);
  }
}
