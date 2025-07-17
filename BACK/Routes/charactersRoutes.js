import express from "express"
import * as charactersControllers from "../Controllers/charactersControllers.js"

const router = express.Router()


router.get("/getting-all", charactersControllers.gettingAllCharacters)


export default router