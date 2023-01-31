const express = require('express')
const app = express()
const PORT = 3000
require('dotenv/config')

const mongoose = require('mongoose')
const MONGO_CONNECTION_STRING = "mongodb+srv://wdb-raghav:123wdb@wdb-unicorn-cluster.ghxnq.mongodb.net/?retryWrites=true&w=majority"

const unicornsRoute = require('./routes/unicorns')
const rideRoute = require('./routes/ride')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/unicorns', unicornsRoute)
app.use('/ride', rideRoute)


mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to Mongo Database.')
})

app.listen(PORT, () => {
  console.log(`Unicorn app listening on port ${PORT}`)
})