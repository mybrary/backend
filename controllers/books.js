const express = require('express')
const router = express.Router()

const Book = require('../models/book-model')

router.get("/", (req, res) => {
    Book.find({})
    .then((books) => {
        res.json(books)
    })
    .catch(console.error)
})

module.exports = router