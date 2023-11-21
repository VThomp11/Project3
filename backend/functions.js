import { faker, id_ID } from '@faker-js/faker';
import * as fs from 'fs';



let weaponArray = [];
let drugArray = [];
let organArray = [];
let animalArray = [];

function createWeapon(){

  let item = faker.helpers.arrayElement(['nerf gun', 'water gun', 'paintball gun', 'finger guns', 'butter knife'])
  return {
    id: weaponArray.length,
    product_id: 1,
    item: faker.commerce.productAdjective() + ' ' + item,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.image.avatar(),
    location: faker.location.nearbyGPSCoordinate(),

  };
}

function createDrug(){
  return {
    id: drugArray.length,
    product_id: 2,
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
    id: animalArray.length,
    product_id: 3,
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
    id: organArray.length,
    product_id: '4',
    item: faker.commerce.productAdjective() + ' ' + organ,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.image.avatar(),
    location: faker.location.nearbyGPSCoordinate(),

  };
}


for (var i = 0; i < 10; i++) {
  let item = createWeapon();
  weaponArray.push(item);
}

for (var i = 0; i < 10; i++) {
  let item = createDrug();
  drugArray.push(item);
}

for (var i = 0; i < 10; i++) {
  let item = createAnimal();
  animalArray.push(item);
}

for (var i = 0; i < 10; i++) {
  let item = createOrgan();
  organArray.push(item);
}

function toCSV(input) {
  return input.map(item => [
    item.id,
    item.product_id,
    item.item,
    item.price,
    item.description,
    item.img,
    item.location
  ])
  .map(e => e.join(","))
  .join("\n")
}

// console.log(toCSV(weaponArray))
let weaponData = toCSV(weaponArray)
let drugData = toCSV(drugArray)
let animalData = toCSV(animalArray)
let organData = toCSV(organArray)
let data = weaponData + drugData + animalData + organData

let header = "id, product_id, item, price, description, img, location\n"

fs.writeFile("inventory.csv", header, (err) => {
  if (err) 
  console.log(err); 
else { 
  console.log("File written successfully\n"); 
}
})


fs.appendFile("inventory.csv", data, (err) => {
  if (err) 
  console.log(err); 
else { 
  console.log("File written successfully\n"); 
}
})

