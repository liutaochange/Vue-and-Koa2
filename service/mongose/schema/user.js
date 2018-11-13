const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
/**
 * 创建模型
 */
const userSchema = new Schema({
  userId: ObjectId,
  userName: {
    unique: true,
    type: String
  },
  password: String,
  comments: [{
    body: String,
    date: Date
  }],
  createTime: {
    type: Date,
    default: Date.now()
  },
  lastLoginTime: {
    type: Date,
    default: Date.now()
  }
})
/**
 * 发布模型
 */
mongoose.model('User', userSchema)