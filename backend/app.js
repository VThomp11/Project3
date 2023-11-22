const fs = require('fs')
const csvParser = require("csv-parser");
const express = require('express'); 
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development'])

const app = express(); 
var results = []; 

app.use(express.json());

// app.use(express.json());

app.get('/animals', (req, res) => {
  knex('animals_table')
    .select('*')
    .then(data => res.json(data))

})
    
app.post('/animals', (req, res) => {
  let newAnimal = req.body
  knex('animals_table')
    // .select()
    // .then(idArray => {
      .insert(
        { 'id': 15, 
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


module.exports = app; 
