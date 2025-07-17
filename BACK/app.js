import express from "express"
import Routes from "./Routes/Routes.js"

const app = express()
app.use(express.json())



app.use("/api", Routes)






app.get("/", (req,res) => {
    res.status(200).json({
        message: `Main route working perfectly.`
    })
})



app.listen(process.env.BACK_PORT, () => {
    console.log(`Server running on http://localhost:${process.env.BACK_PORT}`)
})



