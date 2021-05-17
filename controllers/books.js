const express = require('express')
const router = express.Router()

const Book = require('../models/book-model')

// READ: GET all books in user's collection
router.get("/", (req, res) => {
    Book.find({})
    .then((books) => {
        res.json(books)
    })
    .catch(console.error)
})

// READ: GET a single book
router.get('/:id', (req, res, next) => {
    Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch(next)
})

// CREATE: CREATE a new book in the collection
router.post('/', (req, res, next) => {
    Book.create(req.body)
    .then((book) => res.json(book))
    .catch(next)
})

// UPDATE: PUT updated information on a book in the collection
router.put('/:id', (req, res, next) => {
    Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((book) => res.json(book))
    .catch(next)
})

// DELETE: DELETE a book from the collection
router.delete('/:id', (req, res, next) => {
    Book.findOneAndDelete({ _id: req.params.id })
    .then((book) => res.json(book))
    .catch(next)
})

module.exports = router