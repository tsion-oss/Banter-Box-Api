import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectToMongoDB from "./db/index.js"

import cors from 'cors'

import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT

const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true
 };

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())



app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


server.listen( PORT, () => {
   connectToMongoDB()
   console.log(`Server Running on port http://localhost:${PORT}`)
})
