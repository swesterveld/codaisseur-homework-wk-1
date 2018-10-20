// Write your JS here

// Hero Object
const hero = {};
hero.name = '';
hero.heroic = new Boolean();
hero.inventory = [];
hero.health = 10;
hero.weapon = {
  type: '',
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

const equipWeapon = function() {};

const resetHealth = function() {
  hero.health = 10;
};