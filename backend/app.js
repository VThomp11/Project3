const fs = require('fs')
const csvParser = require("csv-parser");
const express = require('express'); 


const app = express(); 
var results = []; 

app.use(express.json());

// app.use(express.json());

app.get('/', (req, res) => {
  fs.createReadStream('./inventory.csv')
    .pipe(csvParser())
    .on("data", (data) => {
        results.push(data); 
    }) 
    .on('end', () => { 
      res.status(200).send(results); 
    })
})
    


module.exports = app; 
