const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    object: String,
    message: String
})

module.exports = mongoose.model('user', userSchema)