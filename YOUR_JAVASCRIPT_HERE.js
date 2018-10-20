// Write your JS here

const weapons = [
  { type: 'dagger', damage: 2},
  { type: 'rope', damage: 2}
]

// Hero Object
const hero = {};
hero.name = '';
hero.heroic = true;
hero.inventory = [];
hero.health = 10;
hero.weapon = weapons[Math.round(Math.random(2))]

// Game logic functions
const rest = function(obj) {
  obj.health = 10;
  return obj;
};

const pickUpItem = function(hero, weapon) {
  hero.inventory.push(weapon);
  console.log("You picked up a " + weapon.type);
  displayStats();
  document.getElementById(weapon.type).remove();
};

const equipWeapon = function(hero) {
  if (hero.inventory.length > 0) {
    hero.weapon = hero.inventory[0];
    console.log(`You took a ${hero.weapon.type} from your bag.`)
    displayStats();
  } else {
    console.log("You don't have any weapon in your bag.");
  }
};

const resetHealth = function() {
  hero.health = 10;
};

const fightEnemy = function(hero) {
  let damage = parseInt(Math.random() * 20);
  hero.health = Math.max(hero.health-=damage, 0);
  if (hero.health > 0) {
    console.log(`Fighting that enemy damaged your health by ${damage}.`);
    displayStats();
  } else {
    console.log("The enemy was stronger than you expected. You died.");
    // TODO: reset the screen
    displayStats();
  }

  document.getElementById('enemy').remove();
}

const displayStats = function() {
  let stats = [
    `name: ${hero.name}`,
    `health: ${hero.health}`,
    `weapon: ${hero.weapon.type} (damage=${hero.weapon.damage})`
  ];
  let statistics = document.getElementById('stats');
  statistics.innerHTML = stats.join('<br />');
};

// Initialize game with the right settings
const initGame = function() {
  // Find out which hero has been selected by the player
  let radios = document.getElementsByName('player');
  for (i=0; i<radios.length; i++) {
    if (radios[i].checked) {
      hero.name = radios[i].value;
      displayStats();
      break;
    }
  }
};

// An array of available heroes a player could choose from
const playerOptions = [
  { id: 'kitten', name: 'Killer Kitten', url: 'placekitten.com'},
  { id: 'puppy', name: 'Power Puppy', url: 'placepuppy.net'},
];

// Add the available heroes as options to the form on the page
let fieldset = document.getElementById('heroes');
playerOptions.forEach(function(p) {
  let radioItem = document.createElement('input');
  radioItem.type = 'radio';
  radioItem.id = p.id;
  radioItem.name = 'player';
  radioItem.value = p.name;
  radioItem.addEventListener('click', initGame);

  let labelItem = document.createElement('label');
  labelItem.setAttribute('for', p.id);
  labelItem.innerHTML = p.name;

  let heroItem = fieldset.appendChild(document.createElement('div'));
  heroItem.appendChild(radioItem);
  heroItem.appendChild(labelItem);
});

displayStats();