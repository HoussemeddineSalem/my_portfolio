const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const user = require('./model')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 8000;
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true }
    )
    .then(() => app.listen(port, () => console.log("server is running on port 8000")))
    .catch((err) => console.log(err));



app.post('/contact', (req, res) => {
    const { name, email, object, message } = req.body
    user
        .create({ name: name, email: email, object: object, message: message })
        .then(() => res.send('entry added to db'))
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}