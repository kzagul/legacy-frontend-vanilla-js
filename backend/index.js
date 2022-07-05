const express = require("express");
var http = require('http');
// var index = require('./routes/index.js');

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());  


// routes
const testrouter = require('./app/routes/testroute.js')

app.use(express.json())

app.use('/api', testrouter)


app.get("/", (req, res) => {
  res.json({ 
    message: "Travelblog application by K.Zagul",
  });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get('/f', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});








// const express = require('express')
// const axios = require('axios')

// const app = express()

// const getItems = async () => {
//   const items = await axios
//     .get('https://dog.ceo/api/breeds/list/all')
//     .catch(error => console.log(error))
//     return items.data.message
// }


// app.get('/', async (req, res) => {
//   const data = await getItems();
//   res.json(data);
// })

// app.listen(3002)