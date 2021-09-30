class Character {
  constructor(hp, dmg, mana, status) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }
//dommage subit par le gladiator
  takeDamage() {
    if(gladiator2.hp > 0) {
      console.log(`${this.name}, l'attaque t'a infligé ${this.dmg} points de dommages`)
    } else {
      console.log(`Le gladiateur ${this.name} a été tué !`);
    }
  }

//attaque faite par le gladiator à un autre
  dealDamage() {
    this.currentHp = this.hp -= this.spAtkDmg;
    if(this.hp > 0) {
      console.log(`°°°°°°°C'est au tour de ${this.name} d'attaquer°°°°°°°`);
      console.log(`**************************************************`);
      console.log(`Attaque fulgurante ${this.spAtkName} de ${this.name}, vous avez infligé une perte de ${this.spAtkDmg} vies à l'adversaire!`);
  } else {
  }

    this.currentMana = this.mana -= this.spAtkMana;
    if(this.currentMana > 0) {
      console.log(`${this.name}, il ne vous reste plus que ${this.currentMana} mana!`);
      console.log(`**************************************************`);
  } else {
      console.log(`Le gladiateur ${this.name} ne peux plus utilisé d'attaque spéciale !`);
  }
  }
}
