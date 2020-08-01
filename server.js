const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

//connect DB 
const connectDB = require('./config/db')
//route imports 
const transactions = require('./routes/transactions')

dotenv.config({path:'./config/config.env'})

const app = express()
app.use(express.json())
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
//connecting to the db 
connectDB()
app.use('/api/v1/transactions/',transactions)
// app.get('/', (req,res) => res.send('Hello'))
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))

