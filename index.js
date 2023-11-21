import { faker } from '@faker-js/faker';

let weaponArray = [];
let drugArray = [];
let organArray = [];
let animalArray = [];

function createWeapon(){

  let item = faker.helpers.arrayElement(['nerf gun', 'water gun', 'paintball gun', 'finger guns'])
  return {
    // _id: faker.string.uuid(),
    // product: faker.helpers.arrayElement(['drugs', 'animals', 'weapons', 'organs']),
    product: 'weapons',
    item: faker.commerce.productAdjective() + ' ' + item,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.image.avatar(),
    location: faker.location.nearbyGPSCoordinate(),

  };
}

function createDrug(){
  return {
    // _id: faker.string.uuid(),
    // product: faker.helpers.arrayElement(['drugs', 'animals', 'weapons', 'organs']),
    product: 'drugs',
    item: faker.commerce.productAdjective() + faker.helpers.arrayElement([' advil', ' tylenol', ' ibuprofen', ' claritin']),
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.image.avatar(),
    location: faker.location.nearbyGPSCoordinate(),

  };
}

function createAnimal(){
  let animalType = faker.animal.type();
  return {
    // _id: faker.string.uuid(),
    // product: faker.helpers.arrayElement(['drugs', 'animals', 'weapons', 'organs']), 
    product: 'animals',
    item: faker.commerce.productAdjective() + ' ' + animalType,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.image.avatar(),
    location: faker.location.nearbyGPSCoordinate(),

  };
}

function createOrgan(){
  let organ = faker.helpers.arrayElement(['pipe organ', 'reed organ', 'water organ', 'electric organ']);
  return {
    // _id: faker.string.uuid(),
    // product: faker.helpers.arrayElement(['drugs', 'animals', 'weapons', 'organs']), 
    product: 'musical instrument',
    item: faker.commerce.productAdjective() + ' ' + organ,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.image.avatar(),
    location: faker.location.nearbyGPSCoordinate(),

  };
}


for (var i = 0; i < 20; i++) {
  let item = createWeapon();
  weaponArray.push(item);
}

for (var i = 0; i < 20; i++) {
  let item = createDrug();
  drugArray.push(item);
}

for (var i = 0; i < 20; i++) {
  let item = createAnimal();
  animalArray.push(item);
}

for (var i = 0; i < 20; i++) {
  let item = createOrgan();
  organArray.push(item);
}


console.log(organArray)