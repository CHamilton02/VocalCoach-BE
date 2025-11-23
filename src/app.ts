import express from 'express'
import analyze from './routes/analyze'

const app = express()

app.use(express.json())

app.use('/analyze', analyze)

export default app
