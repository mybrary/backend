const Book = require('../models/book-model')
const seedData = require('./book-seed.json')

Book.deleteMany({})
.then(() => {
    return Book.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
    process.exit()
})