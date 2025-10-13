import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoint

app.get('/', (req, res)=> {
    res.send('API WORKING success x1')
})

app.listen(port, ()=> console.log("server started ", port))
<<<<<<< HEAD
=======

//test
>>>>>>> aee826b300764f3b6b9af31f5a49b4d4e5494c78
