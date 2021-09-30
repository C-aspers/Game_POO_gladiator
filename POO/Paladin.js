class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, status = "playing") {
    super(hp, dmg, mana, status);
    this.name = "Ulder"
    this.className = "Paladin"
    this.spAtkName = "Healing Lighting"
    this.spAtkDmg = 4 
    this.spAtkMana = 40
    this.spAtkHeal = 5
    this.maxHealth = 16
  }
}


