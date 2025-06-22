import express from "express"
import userRoute from "./routes/user.routes.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

import cors from "cors";

dotenv.config()
const app = express()

app.use(cors()); // Allow cross-origin requests

connectDB()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Cheat Buster API is running!');
});

// Use our user routes for any path starting with /api
app.use("/api", userRoute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`)
})