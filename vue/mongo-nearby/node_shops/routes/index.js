const express = require('express');
const shop = express.Router();
const db = require('../db/db.js');
const Shop = require('../models/shop.js');

shop.get('/', async(req,res) =>{
  Shop
    .find({
      location: {
        $near: [116.374324,28.005326], // $ 在mongoodb 里
        $maxDistance: 0.1
      }
    }).limit(1).exec(function(err, shops) {
      if (err) {
        console.log(err)
      }
      res.json(shops)
    })
})
shop.post('/', async(req, res) => {
  const wdgc = new Shop({
    name: '万达广场(临川)',
    location: [116.35387,27.962625]
  })
  wdgc
     .save((err, saved) => {
       res.json({
         status: 1
       })
     })
});

module.exports =  (app) => {
  app.use('/shops', shop);
}