const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
const categorySchema = new Schema({
  ID: {
    unique: true,
    type: String
  },
  MALL_CATEGORY_NAME: {
    type: String
  },
  IMAGE: {
    type: String
  },
  TYPE: {
    type: Number
  },
  SORT: {
    type: Number
  },
  COMMENTS: {
    type: String
  }
}, {
  collections: 'Category'
})
mongoose.model('Category', categorySchema)