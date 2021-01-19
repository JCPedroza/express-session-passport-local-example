const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')

const username = {
  type: String,
  required: true,
  unique: true,
  minlength: 3,
  maxlength: 64
}

const password = {
  type: String,
  required: true
}

const email = {
  type: String,
  required: true,
  unique: true,
  validate: {
    validator: isEmail,
    message: 'Invalid email'
  }
}

const user = {
  username,
  password,
  email
}

const userSchema = new Schema(user, { timestamps: true })
const User = model('user', userSchema)

module.exports = User
