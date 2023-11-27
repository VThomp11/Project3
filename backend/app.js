const fs = require('fs')
const csvParser = require("csv-parser");
const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development'])

const app = express();
var results = [];


app.use(express.json());

app.get('/animals', (req, res) => {
  knex('animals_table')
    .select('*')
    .then(data => {
      res.json(data);
      console.log(data.length)
    
    })

})

app.post('/animals', (req, res) => {
  let newAnimal = req.body
  // let idLength;
  knex('animals_table')
    .select('*')
    .then(data => {
      // res.json(data);
      // idLength = data.length;
      knex('animals_table')
    .insert(
      {
        'id': data.length,
        'product_id': newAnimal.product_id,
        'item': newAnimal.item,
        'price': newAnimal.price,
        'description': newAnimal.description,
        'img': newAnimal.img
      }
    )
    .into('animals_table')
    .then(() => res.json(newAnimal))
  })
})

app.patch('/animals', (req, res) => {
  let newAnimal = req.body
  knex('animals_table')
    .insert(
      {
        'id': 15,
        'product_id': newAnimal.product_id,
        'item': newAnimal.item,
        'price': newAnimal.price,
        'description': newAnimal.description,
        'img': newAnimal.img
      }
    )
    .into('animals_table')
    .then(() => res.json(newAnimal))
})


app.get('/drugs', (req, res) => {
  knex('drugs_table')
    .select('*')
    .then(data => res.json(data))
})

app.post('/drugs', (req, res) => {
  let newDrug = req.body
  knex('drugs_table')
    // .select()
    // .then(idArray => {
    .insert(
      {
        'id': 17,
        'product_id': newDrug.product_id,
        'item': newDrug.item,
        'price': newDrug.price,
        'description': newDrug.description,
        'img': newDrug.img
      }
    )
    .into('drugs_table')
    .then(() => res.json(newDrug))
})

app.get('/organs', (req, res) => {
  knex('organs_table')
    .select('*')
    .then(data => res.json(data))

})

app.post('/organs', (req, res) => {
  let newOrgan = req.body
  knex('organs_table')
    // .select()
    // .then(idArray => {
    .insert(
      {
        'id': 15,
        'product_id': newOrgan.product_id,
        'item': newOrgan.item,
        'price': newOrgan.price,
        'description': newOrgan.description,
        'img': newOrgan.img
      }
    )
    .into('organs_table')
    .then(() => res.json(newOrgan))
})
app.get('/weapons', (req, res) => {
  knex('organs_table')
    .select('*')
    .then(data => res.json(data))

})

app.post('/weapons', (req, res) => {
  let newWeapon = req.body
  knex('weapons_table')
    // .select()
    // .then(idArray => {
    .insert(
      {
        'id': 15,
        'product_id': newWeapon.product_id,
        'item': newWeapon.item,
        'price': newWeapon.price,
        'description': newWeapon.description,
        'img': newWeapon.img
      }
    )
    .into('weapons_table')
    .then(() => res.json(newWeapon))
})


module.exports = app; 
