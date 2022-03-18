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

// const express = require("express");
// const breads = express.Router();
// const Bread = require("../models/bread.js");

// // INDEX
// breads.get("/", (req, res) => {
//   res.render("Index", {
//     breads: Bread,
//     title: "Index Page",
//   });
// });

// // SHOW
// breads.get("/:arrayIndex", (req, res) => {
//   if (Bread[req.params.arrayIndex]) {
//     res.render("Show", {
//       bread: Bread[req.params.arrayIndex],
//     });
//   } else {
//     res.send("error404");
//   }
// });

// module.exports = breads;
// -----------------------------------------------------

const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  // get data from model
  Bread.find().then((foundBreads) => {
    // use data in rendering view
    res.render("index", {
      breads: foundBreads,
      title: "Index Page",
    });
  });
});

// CREATE
breads.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.create(req.body);
  res.redirect("/breads");
});

// NEW
breads.get("/new", (req, res) => {
  res.render("new");
});

// SHOW
breads.get("/:id", (req, res) => {
  Bread.findById(req.params.id)
    .then((foundBread) => {
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch((err) => {
      res.send("404");
    });
});

// DELETE
breads.delete("/:id", (req, res) => {
  Bread.findByIdAndDelete(req.params.id).then((deletedBread) => {
    res.status(303).redirect("/breads");
  });
});

// UPDATE
breads.put("/:arrayIndex", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread[req.params.arrayIndex] = req.body;
  res.redirect(`/breads/${req.params.arrayIndex}`);
});

// EDIT
breads.get("/:indexArray/edit", (req, res) => {
  res.render("edit", {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray,
  });
});

module.exports = breads;