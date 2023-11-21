const express = require('express');
const app = express();
const port = 8081;

app.use(express.json());

const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (req, res) =>{
    res.send('Application up and running.')
})

app.listen(port, ()=>{
    console.log('Your Knex and Express application are running successfully');
})

app.get('/pets', (req, res)=>{
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            res.json(petNames);
        })
})






//EXAMPLES for CRUD//
app.get('/breed', (req, res)=>{
    knex('breed')
        .select('*')
        .then(breed => {
            res.json(breed);
        })
})


//posting method
app.post('/breed', async(req, res) =>{
let id;

await knex('breed')
    .select('breed_ID')
    .then(breed =>{
        id = breed.length
        console.log("checking req body", req.body)
    })

await knex('breed').insert({
        breed_ID: id + 1,
        breed_name: req.body.breed_name,
        origin: req.body.origin,
        size: req.body.size,
        group: req.body.group
    })
    .then(()=>{
        knex('breed')
        .select('*')
        .then(breed => {
            res.json(breed);
        })
    })
})


//put/update method
app.put('/breed/:id', function(req,res){
    knex('breed').where('breed_ID', req.params.id)
        .update({
            breed_name: req.body.breed_name,
            size: req.body.size
        })
        .then(function(){
            knex('breed')
            .select('*')
            .then(breed => {
                res.json(breed);
            })
        })
})


//delete method
app.delete('/breed/:id', function(req, res){
    knex('breed').where('breed_ID', req.params.id)
    .del()
    .then(function(){
        knex('breed')
            .select('*')
            .then(breed => {
                res.json(breed);
            })
    })
})


//Grab all the dog by its breed 
app.get('/allthebreed/:id', function(req, res){
    knex.from('breed')
        .innerJoin('dog', 'breed.breed_ID', 'dog.breed_ID')
        .where('breed.breed_ID', req.params.id)
        .then(function(data){
            res.send(data)
        })
})


//Grab all the dog by its temperament 
app.get('/temperament/:temperamentName', function(req, res){
    knex.from('dog')
        .join('breed_temp', 'breed_temp.breed_ID', 'dog.breed_ID')
        .join('temperament', 'breed_temp.temperament_ID', 'temperament.temperament_ID')
        .where('temperament.temperament_name', req.params.temperamentName)
        .then(function(data){
            res.send(data)
        })
})