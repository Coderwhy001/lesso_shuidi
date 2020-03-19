var mongoose = require('mongoose')
 
// login register 中小型的mall
const userSchema = new mongoose.Schema({
  "userId": String, // 生成唯一的用户ID
  "name": String,
  "avatar": String,
  "userName": String,
  "userPwd": String,
  "cartList": [
    {
      productId: String,
      productImg: String,
      productName: String,
      checked: String,
      productNum: Number,
      productPrice: Number
    }
  ],
  'addressList': [
    {
      "addressId": Number,
      "userName": String,
      "streetName": String,
      "tel": Number,
      "isDefault": Boolean
    }
  ]
})

module.exports = mongoose.model('User', userSchema)