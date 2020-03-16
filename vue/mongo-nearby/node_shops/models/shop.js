const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // 必填
    // index:true
  },
  location: {
    type: [Number],
    index: "2d", //平面索引
    sparse: true
  }
})

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop;