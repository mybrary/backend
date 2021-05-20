const mongoose = require('mongoose')

const mongoURI = 
// check if the node environment is production
process.env.NODE_ENV === 'production'
// if so, use DB_URL as the database location
? process.env.DB_URL
// otherwise, use the local database
: 'mongodb://localhost/mybrary'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((instance) =>
console.log(`Connected to database: ${instance.connections[0].name}`))
.catch((error) => console.log('Connection Failed!', error))

module.exports = mongoose