import { faker, id_ID } from '@faker-js/faker';
import * as fs from 'fs';



let weaponArray = [];
let drugArray = [];
let organArray = [];
let animalArray = [];

function createWeapon(){

  let item = faker.helpers.arrayElement(['nerf gun', 'water gun', 'paintball gun', 'butter knife'])
  return {
    id: weaponArray.length,
    product_id: 3,
    item: faker.commerce.productAdjective() + ' ' + item,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.helpers.arrayElement(['https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg', 'https://www.webstaurantstore.com/images/products/large/455387/1783040.jpg', 'https://m.media-amazon.com/images/I/71deGzg7YfL.jpg', 'https://hasbropulse.com/cdn/shop/products/F7979USE0_detail_3_22_Online_2000SQ.jpg?v=1673619478&width=1200', 'https://i5.walmartimages.com/seo/Revoltinator-Nerf-Zombie-Strike-Toy-Motorized-Blaster-18-Nerf-Darts_b9170627-3dc9-4923-bbdb-13615d81822b.9fc8c91b1b405676f7b5bd3af4148c94.jpeg']),
    // location: faker.location.nearbyGPSCoordinate()

  };
}

function createDrug(){
  return {
    id: drugArray.length,
    product_id: 1,
    item: faker.commerce.productAdjective() + faker.helpers.arrayElement([' advil', ' tylenol', ' ibuprofen', ' claritin']),
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.helpers.arrayElement(['https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg', 'https://images.heb.com/is/image/HEBGrocery/002239355-1', 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000', 'https://hargravesotc.com/cdn/shop/files/Ibuprofen_200_mg_1000_Coated_Tablets_1200x1200.jpg?v=1685213830']),
    // location: faker.location.nearbyGPSCoordinate(),

  };
}

function createAnimal(){
  let animalType = faker.animal.type();
  return {
    id: animalArray.length,
    product_id: 0,
    item: faker.commerce.productAdjective() + ' ' + animalType,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.helpers.arrayElement(['https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg', 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wlwt/26226384-26226384.jpg?crop=1xw:0.80645161290322576xh;center,top&resize=900:*', 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D', 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*']),
    // location: faker.location.nearbyGPSCoordinate(),

  };
}

function createOrgan(){
  let organ = faker.helpers.arrayElement(['pipe organ', 'reed organ', 'water organ', 'electric organ']);
  return {
    id: organArray.length,
    product_id: 3,
    item: faker.commerce.productAdjective() + ' ' + organ,
    price: faker.commerce.price(),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    img: faker.helpers.arrayElement(['https://cdn.britannica.com/68/145568-050-289C8CB6/Reed-organ.jpg', 'https://thetablet.org/wp-content/uploads/2021/02/FEAT_IHM_Organ_2.jpg', 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692469534996-R5QCDY9CVOLE0HTSXVKD/image002.jpg?format=1000w']),
    // location: faker.location.nearbyGPSCoordinate(),

  };
}


for (var i = 0; i < 25; i++) {
  let item = createWeapon();
  weaponArray.push(item);
}

for (var i = 0; i < 25; i++) {
  let item = createDrug();
  drugArray.push(item);
}

for (var i = 0; i < 25; i++) {
  let item = createAnimal();
  animalArray.push(item);
}

for (var i = 0; i < 25; i++) {
  let item = createOrgan();
  organArray.push(item);
}


console.log((drugArray))


