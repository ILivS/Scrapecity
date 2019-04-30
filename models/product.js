const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: Array,
        required: true
    },
    color: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
