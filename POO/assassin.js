class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status = "playing") {
    super(hp, dmg, mana, status);
    this.name = "Carl"
    this.className = "Assassin"
    this.spAtkName = "Shadow hit"
    this.spAtkDmg = 7 
    this.spAtkMana = 20
  }
}