class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, status = "playing") {
    super(hp, dmg, mana, status);
    this.name = "Grace"
    this.className = "Fighter"
    this.spAtkName = "Dark Vision"
    this.spAtkDmg = 5 
    this.spAtkMana = 20
    // Also -2dmg per hit until next turn
  }
}





