//&& (gladiator1.hp > 0 || gladiator2.hp > 0)
//création nouveau personnage
function setup() {
  gladiator1 = new Paladin();
  gladiator2 = new Fighter();
  gladiator3 = new Monk();
  gladiator4 = new Berzerker();
  gladiator5 = new Assassin();

//determine nombre de tour
  game = new Game(5);
}

function playing() {
//décompte 
  while(game.turnLeft > 0){
    turn = new Turn();
    turn.startTurn();
    console.log(`le gladiateur ${gladiator1.name} a ${gladiator1.hp} vies `)
    console.log(`le gladiateur ${gladiator2.name} a ${gladiator2.hp} vies `)
    console.log(`le gladiateur ${gladiator3.name} a ${gladiator3.hp} vies `)
    console.log(`le gladiateur ${gladiator4.name} a ${gladiator4.hp} vies `)
    console.log(`le gladiateur ${gladiator5.name} a ${gladiator5.hp} vies `)
    game.turnLeft -= 1
    
    //randomGlad = Math.floor(Math.random() * 6);
    //if(randomGlad === 1) {
//
    let player_choice = prompt("Qui veux-tu attaquer? (2/4:Ulder) (1/3:Grace) (5/7:Moona) (6/8:Draven) (9/10:Carl)")
    //choix de l'attaque: normale ou spéciale
    choice_1 = "1";
    choice_2 = "2";
    choice_3 = "3";//att spé de Grace
    choice_4 = "4";//att spé de Ulder
    choice_5 = "5";
    choice_6 = "6";
    choice_7 = "7";
    choice_8 = "8";
    choice_9 = "9";
    choice_10 = "10";

//attaque toute !!
    if(player_choice === choice_1) {
      gladiator1.takeDamage(gladiator2);
      gladiator2.hp -= gladiator1.dmg;
      if(gladiator2.hp <= 0) {
        console.log(`Le gladiateur ${gladiator2.name} a été tué !`);
      }
    }
    else if(player_choice === choice_2) {
      gladiator2.takeDamage(gladiator1);
      gladiator1.hp -= gladiator2.dmg;
      if(gladiator1.hp <= 0) {
        console.log(`Le gladiateur ${gladiator1.name} a été tué !`);
      }
    }
    else if(player_choice === choice_3) {
      gladiator2.dealDamage(gladiator1);
    }  
    else if(player_choice === choice_4) {
      gladiator1.dealDamage(gladiator2);
    }  
    if(player_choice === choice_5) {
      gladiator3.takeDamage(gladiator4);
      gladiator4.hp -= gladiator3.dmg;
      if(gladiator4.hp <= 0) {
        console.log(`Le gladiateur ${gladiator4.name} a été tué !`);
      }
    }
    else if(player_choice === choice_6) {
      gladiator4.takeDamage(gladiator3);
      gladiator3.hp -= gladiator4.dmg;
      if(gladiator3.hp <= 0) {
        console.log(`Le gladiateur ${gladiator3.name} a été tué !`);
      }
    }
    else if(player_choice === choice_7) {
      gladiator4.dealDamage(gladiator3);
    }  
    else if(player_choice === choice_8) {
      gladiator3.dealDamage(gladiator4);
    }  
    else if(player_choice === choice_9) {
      gladiator2.takeDamage(gladiator5);
      gladiator5.hp -= gladiator2.dmg;
      if(gladiator5.hp <= 0) {
        console.log(`Le gladiateur ${gladiator5.name} a été tué !`);
      }
    }
    else if(player_choice === choice_10) {
      gladiator5.dealDamage(gladiator2);
    }  
  }
}


setup()
playing()
