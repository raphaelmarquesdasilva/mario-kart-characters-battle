import express from "express"
import charactersRoutes from "./Routes/charactersRoutes.js"

const app = express()
app.use(express.json())

app.use("/api/characters", charactersRoutes)


app.listen(process.env.BACK_PORT, () => {
    console.log(`Server running on http://localhost:${process.env.BACK_PORT}`)
})