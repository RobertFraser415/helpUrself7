const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose') 

const app = express()
const port = 4000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 })
 mongoose.connection.on('connected', () => {
   console.log('Mongoose connected')
 })
 mongoose.connection.on('error', (err) => {
   console.log(`Mongoose connected error ${err}`)
 })
 mongoose.connection.on('disconnected', () => {
   console.log('Mongoose disconnected')
 })
//MIDDLEWARE
// app.set('view engine', 'ejs')

app.use(express.json())
app.use(cors())

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

// const connection= mongoose.connection;
// connection.once('open', () => {
//     console.log('Mongoose database connection connected !!!')
// })
const getsRouter = require('./routes/gets')
const givesRouter = require('./routes/gives')
// const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')


app.get('/', (req, res) => {
    res.send("happy friday")
})

app.use('/gives', givesRouter)
app.use('/gets', getsRouter)
// app.use('/users', usersRouter)
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})