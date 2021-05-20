const mongoose = require('../db/connection')

const bookSchema = new mongoose.Schema(
    {
        title: { type: String },
        authors: { type: String },
        publish_date: { type: String },
        image_link: { type: String },
        rating: { type: Number },
        review: { type: String },
        wishlist: { type: Boolean },
        read: { type: Boolean }
    }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book