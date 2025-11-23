import express from 'express'
import analyze from './routes/analyze'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/analyze', analyze)

export default app
