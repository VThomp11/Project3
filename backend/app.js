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
    .select('id')
    .then(idArray => {
      knex('animals_table').insert(
        { 'id': (idArray.length + 1), 
          'item': newAnimal.item
        }
      ).into('animals_table')
    })
    .then(() => res.json(newAnimal))
})

module.exports = app; 
