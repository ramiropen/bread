// const express = require('express')
// const breads = express.Router()

// // INDEX
// breads.get('/', (req, res) => {
//   res.send('This is the index at /breads')
// })

// module.exports = breads
// -------------------------------------------------
// const express = require('express')
// const breads = express.Router()
// const Bread = require('../models/bread.js')

// // INDEX
// breads.get('/', (req, res) => {
//   res.send(Bread)
// })

// module.exports = breads

// // SHOW
// breads.get('/:arrayIndex', (req, res) => {
//     res.send(Bread[req.params.arrayIndex])
//   })
  // -------------------------------------------------
//   const express = require('express')
// const breads = express.Router()
// const Bread = require('../models/bread.js')

// // INDEX------changed INDEX
// // breads.get('/', (req, res) => {  
// //   res.render('index')
// // res.send(Bread)
// // })

// // INDEX
// breads.get('/', (req, res) => {
//   res.render('Index',
//     {
//       breads: Bread
//     }
//   )
// res.send(Bread)
// })

// module.exports = breads

// // SHOW
// breads.get('/:arrayIndex', (req, res) => {
//     res.send(Bread[req.params.arrayIndex])
//   })
// ---------------------------------------------------

const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
    title: "Index Page",
  });
});

// SHOW
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
    });
  } else {
    res.render("error404");
  }
});

module.exports = breads;