// Write your JS here

// Hero Object
const hero = {};
hero.name = '';
hero.heroic = true;
hero.inventory = [];
hero.health = 10;
hero.weapon = {
  type: 'rope',
  damage: 2
};

// Game logic functions
const rest = function(obj) {
  obj.health = 10;
  return obj;
};

const pickUpItem = function(hero, weapon) {
  hero.inventory.push(weapon);
};

const equipWeapon = function(hero) {
  if (hero.inventory.length > 0) {
    hero.weapon = hero.inventory[0];
  }
};

const resetHealth = function() {
  hero.health = 10;
};

const displayStats = function() {
  console.log(`
  name: ${hero.name}
  health: ${hero.health}
  weapon: ${hero.weapon.type} (damage=${hero.weapon.damage})
  `)
}

// Initialize game with the right settings
const initGame = function() {
  // Find out which hero has been selected by the player
  let radios = document.getElementsByName('player')
  for (i=0; i<radios.length; i++) {
    if (radios[i].checked) {
      hero.name = radios[i].value
      displayStats()
      break
    }
  }
}