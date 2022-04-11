import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(helmet())

app.listen(PORT, () => {
  console.log(`Listening PORT: ${PORT}`)
})