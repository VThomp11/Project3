const express = require('express');
const cookieParser = require('cookie-parser');
const { parse } = require('csv-parse/sync');
const { stringify } = require('csv-stringify/sync');
const csvParser = require("csv-parser");
const fs = require('fs');
const { resourceLimits } = require('worker_threads');
const ObjectsToCsv = require('objects-to-csv');

const app = express();

app.use(express.json());
app.use(cookieParser());


//read from CSV dummy file//
let csv;
let csvString;
let newBookcsvString;
let bookcsv;
let dataDirectory = "./data";


app.get('/', (req, res) => {
  res.status(200).send("Hello World!")
})



//Get book by ID
app.get('/books/:bookId', (req, res) => {
  var { bookId } = req.params;
  let detailBook = [];
  let foundFlag = false;
  let result = [];

  fs.createReadStream("./dummy.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", () => {
      result.forEach((book) => {
        if (book.id === bookId) {
          foundFlag = true;
        }
      })

      if (foundFlag) {
        fs.createReadStream(`${dataDirectory}/${bookId}.csv`)
          .pipe(csvParser())
          .on("data", (data) => {
            detailBook.push(data);
            res.status(200).send(detailBook)
          })
      } else {
        res.status(404).send('Book not found in the library')
      }
    });
})


//get all the books
app.get('/books', (req, res) => {
  let result = [];
  fs.createReadStream("./dummy.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", () => {
      res.status(200).send(result)
    });
})

//add a new book
app.post('/books', (req, res) => {
  let result = [];

  fs.createReadStream("./dummy.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", () => {

      const { title, author, cover, genre, synopsis } = req.body
      const newBook = {
        id: result.length + 1,
        title,
        author,
        cover,
      };

      const newDetailBook = {
        id: result.length + 1,
        title,
        author,
        genre,
        synopsis
      };

      result.push(newBook);
      //Write to dummy.csv
      (async () => {
        csv = new ObjectsToCsv(result);
        csvString = (await csv.toString());
        newBookcsvString = await new ObjectsToCsv([newDetailBook]).toString()

        fs.writeFile('./dummy.csv', csvString, function (err) {
          if (err) throw err;
        })

        fs.writeFile(`${dataDirectory}/${newDetailBook.id}.csv`, newBookcsvString, function (err) {
          if (err) throw err;
        })

        res.status(201).send(`${title} was added to the file and dummy csv updated`)
      })();
    });
})



//patcthing things
app.patch('/books/:bookId', (req, res) => {
  var { bookId } = req.params;
  let bookHolder = []
  let foundFlag = false;
  let result = [];

if(`${dataDirectory}/${bookId}.csv`){
  foundFlag = true;
} 

if (foundFlag) {

  fs.createReadStream(`${dataDirectory}/${bookId}.csv`)
    .pipe(csvParser())
    .on("data", (data) => {
      bookHolder.push(data);
    })
    .on("end", () => {
 
      // let myBookIndex = bookId - 1
      const { title, author, cover, genre, synopsis } = req.body

        if(title){
           bookHolder[0].title = title;
        } else {bookHolder[0].title = bookHolder[0].title}

         if(author){
            bookHolder[0].author = author;
        }else {bookHolder[0].author = bookHolder[0].author}

        if(cover){
           bookHolder[0].cover = cover;
        }else {bookHolder[0].cover = bookHolder[0].cover}
        
        if(genre){
           bookHolder[0].genre = genre
        }else {bookHolder[0].genre = bookHolder[0].genre}

        if(synopsis){
          bookHolder[0].synopsis = synopsis
        }else {bookHolder[0].synopsis = bookHolder[0].synopsis}
        

        (async () => {
          bookcsv = await new ObjectsToCsv(bookHolder);
          newBookcsvString = (await bookcsv.toString());
         
          fs.writeFileSync(`${dataDirectory}/${bookId}.csv`, newBookcsvString, function (err) {
            if (err) throw err;
          })
          console.log(newBookcsvString)
        })();        

     })


  fs.createReadStream("./dummy.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", () => {

      let myBookIndex = bookId - 1
      const { title, author, cover, genre, synopsis } = req.body

          if(title){
             result[myBookIndex].title = title;
          } else {result[myBookIndex].title = result[myBookIndex].title}

           if(author){
              result[myBookIndex].author = author;
          }else {result[myBookIndex].author = result[myBookIndex].author}

          if(cover){
             result[myBookIndex].cover = cover;
          }else {result[myBookIndex].cover = result[myBookIndex].cover}
          
          (async () => {
            csv = new ObjectsToCsv(result);
            csvString = (await csv.toString());
   
            fs.writeFile('./dummy.csv', csvString, function (err) {
              if (err) throw err;
            })
  
          })();    

          res.status(200).send(`updated book ID: ${bookId}`)      
    });
  } else {
    res.status(404).send('Book not found in the library')
}})


module.exports = app;






