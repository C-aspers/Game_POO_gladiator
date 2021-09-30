class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, status = "playing") {
    super(hp, dmg, mana, status);
    this.name = "Draven"
    this.className = "Berzerker"
    this.spAtkName = "Rage"
    this.spAtkDmg = 6 
    this.spAtkMana = 0
  }
}