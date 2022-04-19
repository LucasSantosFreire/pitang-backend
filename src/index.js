import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import router from './routes/routes.js'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Listening PORT: ${PORT}`)
})