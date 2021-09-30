class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, status = "playing") {
    super(hp, dmg, mana, status);
    this.name = "Moona"
    this.className = "Monk"
    this.spAtkName = "heal"
    this.spAtkDmg = 8 
    this.spAtkMana = 25
  }
}