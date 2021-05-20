const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Middleware to be activated when user authentication goes online
const validateMiddleware = require('./middleware/validationMiddleware')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

const bookController = require('./controllers/books')
app.use('/books', bookController)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`MyBrary is running on port ${port}`)
})