const express = require('express')
const app = express()
require('./db/mongoose')
const Product = require('./models/product')

app.get('/', async (req, res) => {
    try {
        const data = await Product.find({})
        res.status(201).json({success: true, data})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = app
