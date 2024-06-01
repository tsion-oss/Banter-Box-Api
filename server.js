import dotenv from "dotenv"
dotenv.config()
import express from 'express'
const app = express()
const PORT = process.env.PORT

app.listen( PORT, () => console.log(`Server Running on port http://localhost:${PORT}`))

app.get("/", (req, res) => {
   res.send('Hello World! jkldfdsfadfdsafafggfdgsdfg')
})

app.use("/api/auth", authRoutes)