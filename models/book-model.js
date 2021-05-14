const mongoose = require('../db/connection')

const bookSchema = new mongoose.Schema(
    {
        title: { type: String },
        author: { type: String },
        rating: { type: Number },
        review: { type: String }
    }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book