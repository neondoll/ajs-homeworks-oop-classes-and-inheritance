import Character from './Character';
import CharacterTypes from '../data/CharacterTypes';

export default class Daemon extends Character {
  constructor(name, health = 100, level = 1, attack = 10, defence = 40) {
    super(name, CharacterTypes.daemon, health, level, attack, defence);
  }
}
