import express from 'express'

import env from '@dotenvx/dotenvx'
import connect from './dbConn/db.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser'


// initialize app
const app = express()
app.use(express.json())
env.config({path:'../.env'})
app.use(cors())
const PORT = process.env.PORT || 9000

app.get('/', (req,res)=>{
    res.send("Router is here")


})


// app.use(bodyParser.urlencoded())


// app.use(bodyParser.json())
connect()



app.use('/api/users', userRoutes)




app.listen(PORT, ()=>{

    console.log(`Server is currently running on Port ${PORT}`)
})
