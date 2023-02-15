import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import * as dotenv from 'dotenv' 

import postRoute from './src/post/routes.js' 

const app = express() 

dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(morgan('combined'))

app.use('/post', postRoute)

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URL).then(() => {
    app.listen(PORT, () => console.log(`Backend is running on port: ${PORT}`))
}).catch((error) => {
    console.log(`Database Connection Error: ${error.message}`)
    process.exit(process.exitCode|| 1)
})
